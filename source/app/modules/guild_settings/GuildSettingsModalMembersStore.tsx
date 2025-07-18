// app/modules/guild_settings/GuildSettingsModalMembersStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var10 = function handleStopEditingRoles() {
        var1 = null;
        _closure1_slot7 = var1;
        var3 = false;
        _closure1_slot8 = var3;
        _closure1_slot9 = var1;
        _closure1_slot10 = var1;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var9 = function handleChangeNicknameSuccess() {
        var1 = null;
        _closure1_slot9 = var1;
        var1 = undefined;
        return var1;
    };
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
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.FormStates;
    var _closure1_slot6 = var2;
    var2 = null;
    var _closure1_slot7 = var2;
    var8 = false;
    var _closure1_slot8 = var8;
    var _closure1_slot9 = var2;
    var _closure1_slot10 = var2;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildSettingsModalMembersStore() {
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
                var1 = _closure1_slot12;
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot5;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'isSubmitting';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot7;
            var1 = _closure1_slot6;
            var1 = var1.SUBMITTING;
            var1 = var2 === var1;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isEditing';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'roles';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'memberId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'nicknameError';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildSettingsModalMembersStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleStartEditingRoles(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var3 = var1.userId;
            var4 = _closure1_slot5;
            var1 = var4.getMember;
            var1 = var1.bind(var4)(var5, var3);
            var4 = null;
            if(!(var4 != var1)) { _fun0003_ip = 76; continue _fun0003 }
 38:
            var4 = _closure1_slot6;
            var4 = var4.OPEN;
            _closure1_slot7 = var4;
            var4 = true;
            _closure1_slot8 = var4;
            _closure1_slot10 = var3;
            var1 = var1.roles;
            _closure1_slot11 = var1;
            var1 = undefined;
            return var1;
 76:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING'] = var11;
    var2['GUILD_SETTINGS_MODAL_MEMBERS_STOP_EDITING'] = var10;
    var2['GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE_COMPLETE'] = var10;
    var10 = function handleToggleRole(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var4 = var2.roleId;
            var _closure2_slot0 = var4;
            var3 = var2.state;
            var6 = _closure1_slot11;
            var5 = null;
            if(!(var5 != var6)) { _fun0004_ip = 96; continue _fun0004 }
 33:
            var6 = _closure1_slot11;
            if(var3) { _fun0004_ip = 57; continue _fun0004 }
 40:
            var3 = var6.filter;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var3.bind(var6)(var1);
            _fun0004_ip = 88; continue _fun0004;
 57:
            var3 = new Array(1);
            var7 = 0;
            var9 = var3;
            var8 = var6;
            var5 = arraySpread(var9, var8, var7);
            var3[var5] = var4;
            var4 = 1;
            var4 = var5 + var4;
            var1 = var3;
 88:
            _closure1_slot11 = var1;
            var1 = undefined;
            return var1;
 96:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_SETTINGS_MODAL_MEMBERS_TOGGLE_ROLE'] = var10;
    var10 = function handleSaveRoles() {
        var1 = _closure1_slot6;
        var1 = var1.SUBMITTING;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_SETTINGS_MODAL_MEMBERS_ROLES_SAVE'] = var10;
    var2['GUILD_SETTINGS_MODAL_MEMBERS_START_EDITING_NICKNAME'] = var9;
    var2['GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_SUCCESS'] = var9;
    var4 = function handleChangeNicknameFailure(arg1) {
        var1 = arg1;
        var2 = var1.error;
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var2['GUILD_SETTINGS_MODAL_MEMBERS_CHANGE_NICKNAME_FAILURE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/GuildSettingsModalMembersStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();