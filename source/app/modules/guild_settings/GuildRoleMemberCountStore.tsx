// app/modules/guild_settings/GuildRoleMemberCountStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var _closure1_slot5 = var2;
    var2 = {};
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildRoleMemberCountStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getRoleMemberCount';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                if(!var2) { _fun0003_ip = 23; continue _fun0003 }
 12:
                var2 = _closure1_slot5;
                var1 = var2[var3];
 23:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'shouldFetch';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 60; continue _fun0004 }
 9:
                var2 = _closure1_slot6;
                var3 = var2[var3];
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 58; continue _fun0004 }
 27:
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var3 = var2 - var3;
                var2 = 120000;
                var1 = var3 > var2;
 58:
                return var1;
 60:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'GuildRoleMemberCountStore';
    var7['displayName'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleGuildRoleMemberCountFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var4 = var1.roleMemberCount;
        var2 = _closure1_slot5;
        var2[var3] = var4;
        var2 = _closure1_slot6;
        var1 = global;
        var4 = var1.Date;
        var1 = var4.now;
        var1 = var1.bind(var4)();
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS'] = var8;
    var8 = function handleGuildRoleMemberCountUpdate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var3 = var1.roleId;
            var2 = var1.count;
            var1 = _closure1_slot5;
            var1 = var1[var4];
            var4 = null;
            if(!(var4 != var1)) { _fun0005_ip = 45; continue _fun0005 }
 37:
            var1[var3] = var2;
            var1 = undefined;
            return var1;
 45:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_ROLE_MEMBER_COUNT_UPDATE'] = var8;
    var8 = function handleGuildRoleMemberBulkAdd(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var3 = var1.roleId;
            var5 = var1.added;
            var1 = _closure1_slot5;
            var2 = var1[var2];
            var4 = null;
            if(!(var4 != var2)) { _fun0006_ip = 88; continue _fun0006 }
 37:
            var1 = var2[var3];
            if(!(var4 != var1)) { _fun0006_ip = 84; continue _fun0006 }
 45:
            var1 = global;
            var4 = var1.Object;
            var1 = var4.keys;
            var1 = var1.bind(var4)(var5);
            var4 = var1.length;
            var1 = var2[var3];
            var1 = var1 + var4;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
 84:
            var1 = false;
            return var1;
 88:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_ROLE_MEMBER_BULK_ADD'] = var8;
    var8 = function handleGuildRoleMemberAdd(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var5 = var1.roleId;
            var1 = _closure1_slot5;
            var4 = var1[var2];
            var3 = null;
            var1 = var3 != var4;
            if(!var1) { _fun0007_ip = 65; continue _fun0007 }
 34:
            var2 = var4[var5];
            var2 = var3 != var2;
            if(!var2) { _fun0007_ip = 62; continue _fun0007 }
 45:
            var6 = var4[var5];
            var3 = 1;
            var3 = var6 + var3;
            var4[var5] = var3;
            var2 = undefined;
 62:
            var1 = var2;
 65:
            return var1;
        }
    };
    var2['GUILD_ROLE_MEMBER_ADD'] = var8;
    var8 = function handleGuildRoleMemberRemove(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var5 = var1.roleId;
            var1 = _closure1_slot5;
            var4 = var1[var2];
            var3 = null;
            var1 = var3 != var4;
            if(!var1) { _fun0008_ip = 86; continue _fun0008 }
 34:
            var2 = var4[var5];
            var2 = var3 != var2;
            if(!var2) { _fun0008_ip = 83; continue _fun0008 }
 45:
            var3 = global;
            var8 = var3.Math;
            var7 = var8.max;
            var6 = var4[var5];
            var3 = 1;
            var6 = var6 - var3;
            var3 = 0;
            var3 = var7.bind(var8)(var6, var3);
            var4[var5] = var3;
            var2 = undefined;
 83:
            var1 = var2;
 86:
            return var1;
        }
    };
    var2['GUILD_ROLE_MEMBER_REMOVE'] = var8;
    var8 = function handleGuildRoleCreate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var1 = var1.role;
            var4 = _closure1_slot5;
            var5 = var4[var3];
            var4 = null;
            if(!(var4 == var5)) { _fun0009_ip = 41; continue _fun0009 }
 31:
            var5 = _closure1_slot5;
            var4 = {};
            var5[var3] = var4;
 41:
            var2 = _closure1_slot5;
            var3 = var2[var3];
            var2 = var1.id;
            var1 = 0;
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_ROLE_CREATE'] = var8;
    var4 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var4 = _closure1_slot5;
        var3 = var1.id;
        var3 = delete var4[var3];
        var2 = _closure1_slot6;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DELETE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/GuildRoleMemberCountStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();