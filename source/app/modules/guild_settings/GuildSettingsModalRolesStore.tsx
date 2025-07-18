// app/modules/guild_settings/GuildSettingsModalRolesStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var8;
    var1 = native4;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
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
            _closure1_slot22 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var2 = function getRolesOrder(arg1) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 8;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = arg1;
        var3 = var3.bind(var4)(var2);
        var2 = var3.values;
        var4 = var2.bind(var3)();
        var3 = var4.sortBy;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.position;
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.reverse;
        var3 = var2.bind(var3)();
        var2 = var3.value;
        var3 = var2.bind(var3)();
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot23 = var2;
    var11 = function handleGuildRoleCreateOrUpdate(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var1 = _closure1_slot12;
            if(!var1) { _fun0002_ip = 52; continue _fun0002 }
 18:
            var4 = _closure1_slot23;
            var3 = _closure1_slot8;
            var1 = var3.getRoles;
            var3 = var1.bind(var3)(var5);
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            _closure1_slot14 = var1;
            _closure1_slot13 = var1;
 52:
            var1 = undefined;
            return var1;
        }
    };
    var10 = function handleCancelEditingPermissions() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot18;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 43; continue _fun0003 }
 13:
            var3 = _closure1_slot18;
            var1 = _closure1_slot17;
            if(!(var3 !== var1)) { _fun0003_ip = 43; continue _fun0003 }
 25:
            var1 = _closure1_slot17;
            _closure1_slot18 = var1;
            var1 = false;
            _closure1_slot19 = var1;
            var1 = undefined;
            return var1;
 43:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot24 = var10;
    var1 = function checkForPermissionChanges() {
        var3 = _closure1_slot17;
        var1 = _closure1_slot18;
        var1 = var3 !== var1;
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = global;
    var12 = var1.Object;
    var9 = var12.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.FormStates;
    var _closure1_slot10 = var4;
    var4 = var4.CLOSED;
    var _closure1_slot11 = var4;
    var4 = false;
    var _closure1_slot12 = var4;
    var9 = null;
    var _closure1_slot13 = var9;
    var _closure1_slot14 = var9;
    var _closure1_slot15 = var9;
    var _closure1_slot16 = var9;
    var _closure1_slot17 = var9;
    var _closure1_slot18 = var9;
    var _closure1_slot19 = var4;
    var _closure1_slot20 = var9;
    var _closure1_slot21 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
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
                var1 = _closure1_slot22;
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
                if(!(var2 != var1)) { _fun0005_ip = 165; continue _fun0005 }
 18:
                var1 = _closure1_slot14;
                if(!(var2 != var1)) { _fun0005_ip = 165; continue _fun0005 }
 29:
                var1 = _closure1_slot15;
                var6 = var2 != var1;
                var3 = undefined;
                var1 = undefined;
                if(!var6) { _fun0005_ip = 77; continue _fun0005 }
 44:
                var7 = _closure1_slot8;
                var6 = var7.getRoles;
                var8 = _closure1_slot15;
                var9 = var2 == var8;
                var2 = undefined;
                if(var9) { _fun0005_ip = 72; continue _fun0005 }
 67:
                var2 = var8.id;
 72:
                var1 = var6.bind(var7)(var2);
 77:
                var _closure3_slot0 = var1;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.calculatePositionDeltas;
                var1 = {};
                var6 = _closure1_slot13;
                var1['oldOrdering'] = var6;
                var5 = _closure1_slot14;
                var1['newOrdering'] = var5;
                var5 = function idGetter(arg1) {
                    var1 = arg1;
                    return var1;
                };
                var1['idGetter'] = var5;
                var4 = function existingPositionGetter(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var4 = arg1;
                        var1 = _closure3_slot0;
                        var6 = null;
                        var5 = var6 == var1;
                        var1 = undefined;
                        if(var5) { _fun0006_ip = 29; continue _fun0006 }
 21:
                        var5 = _closure3_slot0;
                        var1 = var5[var4];
 29:
                        var5 = var6 != var1;
                        var1 = -1;
                        if(!var5) { _fun0006_ip = 71; continue _fun0006 }
 42:
                        var5 = _closure3_slot0;
                        var5 = var6 == var5;
                        var2 = undefined;
                        if(var5) { _fun0006_ip = 68; continue _fun0006 }
 55:
                        var3 = _closure3_slot0;
                        var3 = var3[var4];
                        var2 = var3.position;
 68:
                        var1 = var2;
 71:
                        return var1;
                    }
                };
                var1['existingPositionGetter'] = var4;
                var4 = false;
                var1['ascending'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
 165:
                var1 = new Array(0);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'order';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'guild';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'role';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot16;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'permissions';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'hasPermissionChanges';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['get'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'GuildSettingsModalRolesStore';
    var9['displayName'] = var4;
    var4 = 12;
    var4 = var7[var4];
    var15 = var8.bind(var1)(var4);
    var4 = {};
    var12 = function handleStartReorder(arg1) {
        var1 = arg1;
        var5 = var1.guildId;
        var1 = true;
        _closure1_slot12 = var1;
        var4 = _closure1_slot23;
        var3 = _closure1_slot8;
        var1 = var3.getRoles;
        var3 = var1.bind(var3)(var5);
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        _closure1_slot14 = var3;
        _closure1_slot13 = var3;
        var4 = _closure1_slot9;
        var3 = var4.getGuild;
        var3 = var3.bind(var4)(var5);
        _closure1_slot15 = var3;
        var3 = global;
        var3 = var3.clearTimeout;
        var2 = _closure1_slot20;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['GUILD_SETTINGS_MODAL_ROLES_START_REORDER'] = var12;
    var12 = function handleStopReorder() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = false;
            _closure1_slot12 = var1;
            var1 = null;
            _closure1_slot15 = var1;
            _closure1_slot13 = var1;
            var3 = _closure1_slot21;
            if(var3) { _fun0007_ip = 30; continue _fun0007 }
 26:
            _closure1_slot14 = var1;
 30:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER'] = var12;
    var12 = function handleUpdateOrder(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var7 = var1.from;
            var6 = var1.to;
            var2 = _closure1_slot14;
            var1 = null;
            if(!(var1 != var2)) { _fun0008_ip = 71; continue _fun0008 }
 26:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.moveItemFromTo;
            var2 = _closure1_slot14;
            var2 = var4.bind(var5)(var2, var7, var6);
            _closure1_slot14 = var2;
            return var1;
 71:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER'] = var12;
    var4['GUILD_ROLE_CREATE'] = var11;
    var4['GUILD_ROLE_UPDATE'] = var11;
    var11 = function handleGuildRoleDelete(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var7 = var1.roleId;
            var1 = _closure1_slot13;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0009_ip = 33; continue _fun0009 }
 25:
            var2 = _closure1_slot14;
            var1 = var3 != var2;
 33:
            if(!var1) { _fun0009_ip = 140; continue _fun0009 }
 36:
            var3 = _closure1_slot14;
            var2 = var3.indexOf;
            var3 = var2.bind(var3)(var7);
            var2 = -1;
            var2 = var2 !== var3;
            if(!var2) { _fun0009_ip = 137; continue _fun0009 }
 64:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 8;
            var9 = var8[var3];
            var5 = undefined;
            var11 = var6.bind(var5)(var9);
            var10 = var11.without;
            var9 = _closure1_slot14;
            var9 = var10.bind(var11)(var9, var7);
            _closure1_slot14 = var9;
            var3 = var8[var3];
            var6 = var6.bind(var5)(var3);
            var5 = var6.without;
            var3 = _closure1_slot13;
            var3 = var5.bind(var6)(var3, var7);
            _closure1_slot13 = var3;
            var2 = undefined;
 137:
            var1 = var2;
 140:
            return var1;
        }
    };
    var4['GUILD_ROLE_DELETE'] = var11;
    var11 = function handleStartEditingPermissions(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var8 = var1.roleId;
            var2 = _closure1_slot9;
            var1 = var2.getGuild;
            var1 = var1.bind(var2)(var4);
            _closure1_slot15 = var1;
            var4 = null;
            var5 = var4 != var1;
            var1 = undefined;
            var2 = undefined;
            if(!var5) { _fun0010_ip = 73; continue _fun0010 }
 48:
            var7 = _closure1_slot8;
            var6 = var7.getRole;
            var5 = _closure1_slot15;
            var5 = var5.id;
            var2 = var6.bind(var7)(var5, var8);
 73:
            _closure1_slot16 = var2;
            if(!(var4 != var2)) { _fun0010_ip = 99; continue _fun0010 }
 81:
            var2 = _closure1_slot16;
            var2 = var2.permissions;
            _closure1_slot18 = var2;
            _closure1_slot17 = var2;
 99:
            var2 = _closure1_slot10;
            var2 = var2.OPEN;
            _closure1_slot11 = var2;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING'] = var11;
    var11 = function handleStopEditingPermissions() {
        var1 = null;
        _closure1_slot18 = var1;
        _closure1_slot17 = var1;
        _closure1_slot16 = var1;
        _closure1_slot15 = var1;
        var1 = false;
        _closure1_slot19 = var1;
        var1 = _closure1_slot10;
        var1 = var1.CLOSED;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING'] = var11;
    var4['GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL'] = var10;
    var10 = function handleAllowPermission(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var6 = var1.permission;
            var3 = _closure1_slot18;
            var1 = null;
            if(!(var1 != var3)) { _fun0011_ip = 73; continue _fun0011 }
 22:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.add;
            var3 = _closure1_slot18;
            var3 = var4.bind(var5)(var3, var6);
            _closure1_slot18 = var3;
            var2 = _closure1_slot25;
            var2 = var2.bind(var1)();
            return var1;
 73:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW'] = var10;
    var10 = function handleDenyPermission(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var6 = var1.permission;
            var3 = _closure1_slot18;
            var1 = null;
            if(!(var1 != var3)) { _fun0012_ip = 74; continue _fun0012 }
 22:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.remove;
            var3 = _closure1_slot18;
            var3 = var4.bind(var5)(var3, var6);
            _closure1_slot18 = var3;
            var2 = _closure1_slot25;
            var2 = var2.bind(var1)();
            return var1;
 74:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY'] = var10;
    var10 = function handleSubmitPermissions() {
        var1 = _closure1_slot10;
        var1 = var1.SUBMITTING;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING'] = var10;
    var10 = function handleSubmitPermissionsSuccess() {
        var2 = _closure1_slot10;
        var2 = var2.OPEN;
        _closure1_slot11 = var2;
        var2 = _closure1_slot18;
        _closure1_slot17 = var2;
        var2 = _closure1_slot25;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var4['GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS'] = var10;
    var10 = function handleSubmitPermissionsFailure() {
        var2 = _closure1_slot10;
        var2 = var2.OPEN;
        _closure1_slot11 = var2;
        var2 = _closure1_slot24;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var4['GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE'] = var10;
    var10 = function handleSubmit() {
        var1 = true;
        _closure1_slot21 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_SETTINGS_SUBMIT'] = var10;
    var5 = function handleSubmitSuccess() {
        var1 = false;
        _closure1_slot21 = var1;
        var2 = global;
        var5 = var2.clearTimeout;
        var4 = _closure1_slot20;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var5 = var2.setTimeout;
        var4 = function() {
            var1 = null;
            _closure1_slot14 = var1;
            var1 = undefined;
            return var1;
        };
        var2 = 400;
        var2 = var5.bind(var1)(var4, var2);
        _closure1_slot20 = var2;
        return var1;
    };
    var4['GUILD_SETTINGS_SUBMIT_SUCCESS'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var16 = var5;
    var14 = var4;
    var4 = new var16[var9](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/GuildSettingsModalRolesStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getRolesOrder'] = var2;
    return var1;
})();