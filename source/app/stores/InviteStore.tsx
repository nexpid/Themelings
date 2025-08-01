// app/stores/InviteStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function updateInvite(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = null;
            var3 = var6 != var1;
            var2 = '';
            if(!var3) { _fun0002_ip = 19; continue _fun0002 }
 16:
            var2 = var1;
 19:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 6;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.parseExtraDataFromInviteKey;
            var4 = var4.bind(var5)(var2);
            var7 = _closure1_slot8;
            var5 = var7.get;
            var7 = var5.bind(var7)(var2);
            var5 = var2;
            if(!(var6 == var7)) { _fun0002_ip = 104; continue _fun0002 }
 76:
            var2 = {};
            var8 = _closure1_slot7;
            var8 = var8.RESOLVING;
            var2['state'] = var8;
            var4 = var4.baseCode;
            var2['code'] = var4;
            _fun0002_ip = 133; continue _fun0002;
 104:
            var4 = {};
            var8 = _closure1_slot7;
            var8 = var8.RESOLVING;
            var4['state'] = var8;
            var10 = var4;
            var9 = var7;
            var7 = copyDataProperties(var10, var9);
            var2 = var4;
 133:
            var4 = arg2;
            var4 = var4.bind(var1)(var2);
            var4 = global;
            var8 = var4.Map;
            var10 = _closure1_slot8;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var11 = var7;
            var4 = new var11[var8](var10, var9);
            var7 = var4 instanceof Object ? var4 : var7;
            _closure1_slot8 = var7;
            var4 = var7.set;
            var4 = var4.bind(var7)(var5, var2);
            var7 = var2.guild;
            var8 = var6 == var7;
            var4 = var2;
            var2 = undefined;
            if(var8) { _fun0002_ip = 210; continue _fun0002 }
 205:
            var2 = var7.id;
 210:
            if(!(var6 != var2)) { _fun0002_ip = 246; continue _fun0002 }
 214:
            var2 = {};
            var9 = _closure1_slot10;
            var10 = var2;
            var6 = copyDataProperties(var10, var9);
            var4 = var4.guild;
            var4 = var4.id;
            var2[var4] = var5;
            _closure1_slot10 = var2;
 246:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var9 = function handleInviteResolveFailure(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot12;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = 'banned';
                var2 = var2 in var3;
                if(!var2) { _fun0003_ip = 31; continue _fun0003 }
 18:
                var1 = _closure2_slot0;
                var1 = var1.banned;
                if(var1) { _fun0003_ip = 46; continue _fun0003 }
 31:
                var1 = _closure1_slot7;
                var2 = var1.EXPIRED;
                _fun0003_ip = 59; continue _fun0003;
 46:
                var1 = _closure1_slot7;
                var2 = var1.BANNED;
 59:
                var1 = arg1;
                var1['state'] = var2;
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.InviteStates;
    var _closure1_slot7 = var8;
    var8 = var2.Map;
    var10 = var8.prototype;
    var10 = Object.create(var10, {constructor: {value: var8}});
    var15 = var10;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot8 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot9 = var2;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function InviteStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot11;
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
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'getInvite';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var3 = _closure1_slot8;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getInviteError';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot9;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getInvites';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getInviteKeyForGuildId';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot10;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'InviteStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleInviteResolve(arg1) {
        var1 = arg1;
        var5 = var1.code;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.parseExtraDataFromInviteKey;
        var7 = var2.bind(var3)(var5);
        var2 = global;
        var4 = var2.Map;
        var9 = _closure1_slot8;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var10 = var3;
        var2 = new var10[var4](var9, var8);
        var4 = var2 instanceof Object ? var2 : var3;
        _closure1_slot8 = var4;
        var3 = var4.set;
        var2 = {};
        var7 = var7.baseCode;
        var2['code'] = var7;
        var6 = _closure1_slot7;
        var6 = var6.RESOLVING;
        var2['state'] = var6;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var2['INVITE_RESOLVE'] = var10;
    var10 = function handleInviteResolveSuccess(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot12;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg1;
                var1 = _closure1_slot7;
                var1 = var1.RESOLVED;
                var2['state'] = var1;
                var3 = _closure2_slot0;
                var4 = var3.invite;
                var4 = var4.guild;
                var2['guild'] = var4;
                var4 = var3.invite;
                var4 = var4.channel;
                var2['channel'] = var4;
                var4 = var3.invite;
                var4 = var4.inviter;
                var2['inviter'] = var4;
                var3 = var3.invite;
                var5 = var3.approximate_member_count;
                var3 = null;
                var6 = var3 != var5;
                var4 = null;
                if(!var6) { _fun0005_ip = 107; continue _fun0005 }
 104:
                var4 = var5;
 107:
                var2['approximate_member_count'] = var4;
                var4 = _closure2_slot0;
                var4 = var4.invite;
                var4 = var4.approximate_presence_count;
                var5 = var3 != var4;
                var3 = null;
                if(!var5) { _fun0005_ip = 141; continue _fun0005 }
 138:
                var3 = var4;
 141:
                var2['approximate_presence_count'] = var3;
                var1 = _closure2_slot0;
                var3 = var1.invite;
                var3 = var3.target_type;
                var2['target_type'] = var3;
                var3 = var1.invite;
                var3 = var3.target_user;
                var2['target_user'] = var3;
                var3 = var1.invite;
                var3 = var3.target_application;
                var2['target_application'] = var3;
                var3 = var1.invite;
                var3 = var3.expires_at;
                var2['expires_at'] = var3;
                var3 = var1.invite;
                var3 = var3.stage_instance;
                var2['stage_instance'] = var3;
                var3 = var1.invite;
                var3 = var3.friends_count;
                var2['friends_count'] = var3;
                var3 = var1.invite;
                var3 = var3.is_contact;
                var2['is_contact'] = var3;
                var3 = var1.invite;
                var3 = var3.guild_scheduled_event;
                var2['guild_scheduled_event'] = var3;
                var3 = var1.invite;
                var3 = var3.type;
                var2['type'] = var3;
                var3 = var1.invite;
                var3 = var3.flags;
                var2['flags'] = var3;
                var3 = var1.invite;
                var3 = var3.is_nickname_changeable;
                var2['is_nickname_changeable'] = var3;
                var1 = var1.invite;
                var1 = var1.profile;
                var2['profile'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['INVITE_RESOLVE_SUCCESS'] = var10;
    var2['INVITE_RESOLVE_FAILURE'] = var9;
    var2['INSTANT_INVITE_REVOKE_SUCCESS'] = var9;
    var9 = function handleFriendInviteCreate(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot12;
        var1 = var1.invite;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            var2 = arg1;
            var1 = _closure1_slot7;
            var1 = var1.RESOLVED;
            var2['state'] = var1;
            var1 = _closure2_slot0;
            var1 = var1.invite;
            var1 = var1.inviter;
            var2['inviter'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['FRIEND_INVITE_CREATE_SUCCESS'] = var9;
    var9 = function handleFriendInviteRevokeSuccess(arg1) {
        var1 = arg1;
        var3 = var1.invites;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var4 = _closure1_slot12;
            var1 = arg1;
            var3 = var1.code;
            var1 = undefined;
            var2 = function(arg1) {
                var1 = _closure1_slot7;
                var2 = var1.EXPIRED;
                var1 = arg1;
                var1['state'] = var2;
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['FRIEND_INVITE_REVOKE_SUCCESS'] = var9;
    var9 = function handleInstantInviteCreate(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot12;
        var1 = var1.invite;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var1 = _closure1_slot7;
                var1 = var1.RESOLVED;
                var2['state'] = var1;
                var3 = _closure2_slot0;
                var4 = var3.invite;
                var4 = var4.guild;
                var2['guild'] = var4;
                var4 = var3.invite;
                var4 = var4.channel;
                var2['channel'] = var4;
                var4 = var3.invite;
                var4 = var4.inviter;
                var2['inviter'] = var4;
                var3 = var3.invite;
                var5 = var3.approximate_member_count;
                var3 = null;
                var6 = var3 != var5;
                var4 = null;
                if(!var6) { _fun0006_ip = 107; continue _fun0006 }
 104:
                var4 = var5;
 107:
                var2['approximate_member_count'] = var4;
                var4 = _closure2_slot0;
                var4 = var4.invite;
                var4 = var4.approximate_presence_count;
                var5 = var3 != var4;
                var3 = null;
                if(!var5) { _fun0006_ip = 141; continue _fun0006 }
 138:
                var3 = var4;
 141:
                var2['approximate_presence_count'] = var3;
                var1 = _closure2_slot0;
                var3 = var1.invite;
                var3 = var3.target_type;
                var2['target_type'] = var3;
                var3 = var1.invite;
                var3 = var3.target_user;
                var2['target_user'] = var3;
                var3 = var1.invite;
                var3 = var3.target_application;
                var2['target_application'] = var3;
                var3 = var1.invite;
                var3 = var3.stage_instance;
                var2['stage_instance'] = var3;
                var3 = var1.invite;
                var3 = var3.guild_scheduled_event;
                var2['guild_scheduled_event'] = var3;
                var3 = var1.invite;
                var3 = var3.type;
                var2['type'] = var3;
                var3 = var1.invite;
                var3 = var3.is_nickname_changeable;
                var2['is_nickname_changeable'] = var3;
                var1 = var1.invite;
                var1 = var1.profile;
                var2['profile'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['INSTANT_INVITE_CREATE_SUCCESS'] = var9;
    var9 = function handleAcceptInvite(arg1) {
        var4 = _closure1_slot12;
        var1 = arg1;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            var1 = _closure1_slot7;
            var2 = var1.ACCEPTING;
            var1 = arg1;
            var1['state'] = var2;
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['INVITE_ACCEPT'] = var9;
    var9 = function handleAcceptInviteSuccess(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot12;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            var2 = arg1;
            var1 = _closure1_slot7;
            var1 = var1.ACCEPTED;
            var2['state'] = var1;
            var3 = _closure2_slot0;
            var1 = var3.invite;
            var1 = var1.guild;
            var2['guild'] = var1;
            var1 = var3.invite;
            var1 = var1.new_member;
            var2['new_member'] = var1;
            var1 = {};
            var5 = var2.channel;
            var6 = var1;
            var4 = copyDataProperties(var6, var5);
            var3 = var3.invite;
            var5 = var3.channel;
            var6 = var1;
            var3 = copyDataProperties(var6, var5);
            var2['channel'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['INVITE_ACCEPT_SUCCESS'] = var9;
    var9 = function handleAcceptInviteFailure(arg1) {
        var1 = arg1;
        var6 = _closure1_slot9;
        var5 = var6.set;
        var4 = var1.code;
        var3 = var1.error;
        var3 = var5.bind(var6)(var4, var3);
        var4 = _closure1_slot12;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            var1 = _closure1_slot7;
            var2 = var1.ERROR;
            var1 = arg1;
            var1['state'] = var2;
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['INVITE_ACCEPT_FAILURE'] = var9;
    var9 = function handleInviteAppOpening(arg1) {
        var4 = _closure1_slot12;
        var1 = arg1;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            var1 = _closure1_slot7;
            var2 = var1.APP_OPENING;
            var1 = arg1;
            var1['state'] = var2;
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['INVITE_APP_OPENING'] = var9;
    var9 = function handleInviteAppOpened(arg1) {
        var4 = _closure1_slot12;
        var1 = arg1;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            var1 = _closure1_slot7;
            var2 = var1.APP_OPENED;
            var1 = arg1;
            var1['state'] = var2;
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['INVITE_APP_OPENED'] = var9;
    var4 = function handleInviteAppNotOpened(arg1) {
        var4 = _closure1_slot12;
        var1 = arg1;
        var3 = var1.code;
        var1 = undefined;
        var2 = function(arg1) {
            var1 = _closure1_slot7;
            var2 = var1.APP_NOT_OPENED;
            var1 = arg1;
            var1['state'] = var2;
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2['INVITE_APP_NOT_OPENED'] = var4;
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
    var4 = 'stores/InviteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();