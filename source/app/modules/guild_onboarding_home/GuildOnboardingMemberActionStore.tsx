// app/modules/guild_onboarding_home/GuildOnboardingMemberActionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var4 = global;
    var9 = var4.Object;
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
    var2 = {};
    var _closure1_slot5 = var2;
    var8 = {};
    var _closure1_slot6 = var8;
    var4 = var4.Set;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var13 = var8;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function GuildOnboardingMemberActionStore() {
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
                var1 = _closure1_slot8;
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
        var1 = 'getCompletedActions';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0003_ip = 23; continue _fun0003 }
 12:
                var2 = _closure1_slot6;
                var1 = var2[var3];
 23:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasCompletedActionForChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = this;
                var2 = var3.getCompletedActions;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0004_ip = 37; continue _fun0004 }
 26:
                var2 = arg2;
                var2 = var4[var2];
                var1 = var3 != var2;
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var1 = null;
                if(!(var1 != var4)) { _fun0005_ip = 48; continue _fun0005 }
 9:
                var1 = {};
                var3 = _closure1_slot6;
                var3 = var3[var4];
                var1['completedActions'] = var3;
                var3 = _closure1_slot7;
                var2 = var3.has;
                var2 = var2.bind(var3)(var4);
                var1['loading'] = var2;
                _fun0005_ip = 50; continue _fun0005;
 48:
                var1 = {};
 50:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'GuildOnboardingMemberActionStore';
    var8['displayName'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var12 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function handleMemberActionsFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot7;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_NEW_MEMBER_ACTIONS_FETCH_START'] = var9;
    var9 = function handleMemberActionsFetchSuccess(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.memberActions;
            var3 = var1.guildId;
            var1 = null;
            if(!(var1 == var4)) { _fun0006_ip = 37; continue _fun0006 }
 20:
            var2 = _closure1_slot6;
            var1 = _closure1_slot5;
            var2[var3] = var1;
            _fun0006_ip = 62; continue _fun0006;
 37:
            var2 = _closure1_slot6;
            var2[var3] = var4;
            var2 = _closure1_slot7;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
 62:
            var1 = undefined;
            return var1;
        }
    };
    var4['GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS'] = var9;
    var9 = function handleMemberActionsFetchFail(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot7;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL'] = var9;
    var9 = function handleNewMemberActionsDelete(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var3 = _closure1_slot6;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0007_ip = 37; continue _fun0007 }
 25:
            var1 = _closure1_slot6;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
 37:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS'] = var9;
    var9 = function handleCompleteNewMemberAction(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var6 = var1.channelId;
        var2 = {};
        var7 = _closure1_slot6;
        var8 = var2;
        var3 = copyDataProperties(var8, var7);
        var3 = {};
        var5 = _closure1_slot6;
        var7 = var5[var4];
        var8 = var3;
        var5 = copyDataProperties(var8, var7);
        var5 = true;
        var3[var6] = var5;
        var2[var4] = var3;
        _closure1_slot6 = var2;
        var1 = undefined;
        return var1;
    };
    var4['COMPLETE_NEW_MEMBER_ACTION'] = var9;
    var5 = function handleGuildDelete(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var4 = _closure1_slot6;
            var3 = var1.id;
            var4 = var4[var3];
            var3 = null;
            if(!(var3 != var4)) { _fun0008_ip = 47; continue _fun0008 }
 30:
            var2 = _closure1_slot6;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
 47:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_DELETE'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var13 = var5;
    var11 = var4;
    var4 = new var13[var8](var12, var11, var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_onboarding_home/GuildOnboardingMemberActionStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['NO_ACTIONS'] = var2;
    return var1;
})();