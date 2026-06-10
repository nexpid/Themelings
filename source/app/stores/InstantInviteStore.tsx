// app/stores/InstantInviteStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function normalizeInviteCodeForInstallationId(arg1) {
        var2 = arg1;
        var1 = var2.toLowerCase;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot19 = var1;
    var9 = function handleReceivedInstallationIdClear(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var4 = var1.inviteCode;
            var3 = _closure1_slot19;
            var1 = undefined;
            var4 = var3.bind(var1)(var4);
            var5 = _closure1_slot17;
            var3 = var5.has;
            var3 = var3.bind(var5)(var4);
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = false;
            return var3;
case 6:
            var3 = global;
            var6 = var3.Map;
            var7 = _closure1_slot17;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var8 = var5;
            var3 = new var8[var6](var7, var6);
            var3 = var3 instanceof Object ? var3 : var5;
            _closure1_slot17 = var3;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var _closure1_slot20 = var9;
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
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.InviteTargetTypes;
    var _closure1_slot8 = var8;
    var8 = {};
    var _closure1_slot10 = var8;
    var8 = {};
    var _closure1_slot11 = var8;
    var8 = {};
    var _closure1_slot12 = var8;
    var8 = {};
    var _closure1_slot13 = var8;
    var8 = false;
    var _closure1_slot14 = var8;
    var _closure1_slot15 = var8;
    var _closure1_slot16 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot17 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function InstantInviteStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
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
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = arg1;
                var1 = arguments[1];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var1 = {};
case 11:
                var7 = var1.targetType;
                var4 = var1.targetUserId;
                var9 = var1.targetApplicationId;
                var1 = _closure1_slot8;
                var1 = var1.STREAM;
                if(!(var7 === var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var5 = null;
                if(!(var5 == var4)) { _fun0004_ip = 15; continue _fun0004 }
case 13:
                var1 = _closure1_slot8;
                var1 = var1.EMBEDDED_APPLICATION;
                if(!(var7 === var1)) { _fun0004_ip = 16; continue _fun0004 }
case 8:
                var7 = null;
                if(!(var7 == var9)) { _fun0004_ip = 17; continue _fun0004 }
case 16:
                var1 = _closure1_slot10;
                var1 = var1[var6];
                _fun0004_ip = 18; continue _fun0004;
case 17:
                var8 = _closure1_slot12;
                var8 = var8[var6];
                var10 = var7 == var8;
                var7 = undefined;
                if(var10) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var7 = var8[var9];
case 19:
                var1 = var7;
case 18:
                _fun0004_ip = 21; continue _fun0004;
case 15:
                var3 = _closure1_slot11;
                var3 = var3[var6];
                var5 = var5 == var3;
                var2 = undefined;
                if(var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var2 = var3[var4];
case 22:
                var1 = var2;
case 21:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFriendInvite';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getFriendInvitesFetching';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'canRevokeFriendInvite';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot9;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var3 = _closure1_slot15;
                var1 = !var3;
case 24:
                if(!var1) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var2 = _closure1_slot16;
                var1 = !var2;
case 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getReceivedInstallationIdForInviteCode';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot17;
            var2 = var3.get;
            var5 = _closure1_slot19;
            var4 = undefined;
            var1 = arg1;
            var1 = var5.bind(var4)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'InstantInviteStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleConnectionOpen() {
        var1 = {};
        _closure1_slot10 = var1;
        var1 = {};
        _closure1_slot11 = var1;
        var1 = {};
        _closure1_slot12 = var1;
        var1 = {};
        _closure1_slot13 = var1;
        var1 = null;
        var _closure1_slot9 = var1;
        var1 = false;
        _closure1_slot15 = var1;
        _closure1_slot16 = var1;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleDeleteChannel(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var4 = _closure1_slot10;
        var3 = var1.id;
        var3 = delete var4[var3];
        var4 = _closure1_slot11;
        var3 = var1.id;
        var3 = delete var4[var3];
        var2 = _closure1_slot12;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var2['CHANNEL_DELETE'] = var10;
    var10 = function handleFriendInviteCreateSuccess(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot13;
            var2 = var1.invite;
            var2 = var2.code;
            var6 = _closure1_slot7;
            var5 = var6.createFromServer;
            var1 = var1.invite;
            var1 = var5.bind(var6)(var1);
            var4[var2] = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 7;
            var2 = var7[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var2);
            var2 = 8;
            var2 = var7[var2];
            var5 = var6.bind(var1)(var2);
            var2 = 9;
            var2 = var7[var2];
            var7 = var6.bind(var1)(var2);
            var2 = global;
            var8 = var2.Object;
            var6 = var8.values;
            var2 = _closure1_slot13;
            var6 = var6.bind(var8)(var2);
            var2 = 'createdAt';
            var2 = var7.bind(var1)(var6, var2);
            var2 = var5.bind(var1)(var2);
            var4 = var4.bind(var1)(var2);
            var2 = null;
            var5 = var2 != var4;
            if(!var5) { _fun0006_ip = 28; continue _fun0006 }
case 29:
            var2 = var4;
case 28:
            _closure1_slot9 = var2;
            var2 = false;
            _closure1_slot16 = var2;
            return var1;
        }
    };
    var2['FRIEND_INVITE_CREATE_SUCCESS'] = var10;
    var10 = function handleFriendInviteCreateFailure() {
        var1 = false;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['FRIEND_INVITE_CREATE_FAILURE'] = var10;
    var10 = function handleFriendInviteRevokeSuccess(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.invites;
            var2 = null;
            if(!(var2 != var3)) { _fun0007_ip = 7; continue _fun0007 }
case 30:
            var4 = var1.invites;
            var3 = var4.forEach;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var4 = _closure1_slot13;
                    var3 = var1.code;
                    var4 = var4[var3];
                    var3 = null;
                    if(!(var3 != var4)) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    var2 = _closure1_slot13;
                    var1 = var1.code;
                    var1 = delete var2[var1];
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
case 7:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 7;
            var4 = var8[var1];
            var1 = undefined;
            var5 = var7.bind(var1)(var4);
            var4 = 8;
            var4 = var8[var4];
            var6 = var7.bind(var1)(var4);
            var4 = 9;
            var4 = var8[var4];
            var8 = var7.bind(var1)(var4);
            var4 = global;
            var9 = var4.Object;
            var7 = var9.values;
            var4 = _closure1_slot13;
            var7 = var7.bind(var9)(var4);
            var4 = 'createdAt';
            var4 = var8.bind(var1)(var7, var4);
            var4 = var6.bind(var1)(var4);
            var4 = var5.bind(var1)(var4);
            var5 = var2 != var4;
            var2 = null;
            if(!var5) { _fun0007_ip = 29; continue _fun0007 }
case 33:
            var2 = var4;
case 29:
            _closure1_slot9 = var2;
            var2 = false;
            _closure1_slot15 = var2;
            return var1;
        }
    };
    var2['FRIEND_INVITE_REVOKE_SUCCESS'] = var10;
    var10 = function handleInstantInviteCreateSuccess(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channelId;
            var5 = var1.invite;
            var4 = _closure1_slot7;
            var3 = var4.createFromServer;
            var3 = var3.bind(var4)(var5);
            var5 = var3.targetType;
            var4 = _closure1_slot8;
            var4 = var4.STREAM;
            if(!(var5 === var4)) { _fun0009_ip = 34; continue _fun0009 }
case 35:
            var4 = var3.targetUser;
            var5 = null;
            if(!(var5 == var4)) { _fun0009_ip = 36; continue _fun0009 }
case 34:
            var6 = var3.targetType;
            var4 = _closure1_slot8;
            var4 = var4.EMBEDDED_APPLICATION;
            if(!(var6 === var4)) { _fun0009_ip = 37; continue _fun0009 }
case 38:
            var4 = var3.targetApplication;
            var6 = null;
            if(!(var6 == var4)) { _fun0009_ip = 19; continue _fun0009 }
case 37:
            var4 = _closure1_slot10;
            var4[var2] = var3;
            _fun0009_ip = 39; continue _fun0009;
case 19:
            var4 = _closure1_slot12;
            var4 = var4[var2];
            if(!(var6 == var4)) { _fun0009_ip = 23; continue _fun0009 }
case 40:
            var6 = _closure1_slot12;
            var4 = {};
            var6[var2] = var4;
case 23:
            var4 = _closure1_slot12;
            var6 = var4[var2];
            var4 = var3.targetApplication;
            var4 = var4.id;
            var6[var4] = var3;
            _fun0009_ip = 39; continue _fun0009;
case 36:
            var4 = _closure1_slot11;
            var4 = var4[var2];
            if(!(var5 == var4)) { _fun0009_ip = 41; continue _fun0009 }
case 42:
            var5 = _closure1_slot11;
            var4 = {};
            var5[var2] = var4;
case 41:
            var1 = _closure1_slot11;
            var2 = var1[var2];
            var1 = global;
            var5 = var1.String;
            var1 = var3.targetUser;
            var4 = var1.id;
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var2[var1] = var3;
case 39:
            var1 = undefined;
            return var1;
        }
    };
    var2['INSTANT_INVITE_CREATE_SUCCESS'] = var10;
    var10 = function handleInstantInviteCreateFailure(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot10;
        var1 = null;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['INSTANT_INVITE_CREATE_FAILURE'] = var10;
    var10 = function handleInstantInviteRevokeSuccess(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot10;
        var1 = null;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['INSTANT_INVITE_REVOKE_SUCCESS'] = var10;
    var10 = function handleFriendInviteRevokeRequest() {
        var1 = true;
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var2['FRIEND_INVITE_REVOKE_REQUEST'] = var10;
    var10 = function handleFriendInviteCreateRequest() {
        var1 = true;
        _closure1_slot16 = var1;
        var1 = undefined;
        return var1;
    };
    var2['FRIEND_INVITE_CREATE_REQUEST'] = var10;
    var10 = function handleFriendInviteFetchRequest() {
        var1 = true;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['FRIEND_INVITES_FETCH_REQUEST'] = var10;
    var10 = function handleFriendInviteFetchResponse(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = {};
            _closure1_slot13 = var1;
            var1 = arg1;
            var4 = var1.invites;
            var2 = var4.forEach;
            var1 = function(arg1) {
                var5 = arg1;
                var3 = _closure1_slot13;
                var2 = var5.code;
                var4 = _closure1_slot7;
                var1 = var4.createFromServer;
                var1 = var1.bind(var4)(var5);
                var3[var2] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 7;
            var2 = var7[var1];
            var1 = undefined;
            var4 = var6.bind(var1)(var2);
            var2 = 8;
            var2 = var7[var2];
            var5 = var6.bind(var1)(var2);
            var2 = 9;
            var2 = var7[var2];
            var7 = var6.bind(var1)(var2);
            var2 = global;
            var8 = var2.Object;
            var6 = var8.values;
            var2 = _closure1_slot13;
            var6 = var6.bind(var8)(var2);
            var2 = 'createdAt';
            var2 = var7.bind(var1)(var6, var2);
            var2 = var5.bind(var1)(var2);
            var4 = var4.bind(var1)(var2);
            var2 = null;
            var5 = var2 != var4;
            if(!var5) { _fun0010_ip = 43; continue _fun0010 }
case 44:
            var2 = var4;
case 43:
            _closure1_slot9 = var2;
            var2 = false;
            _closure1_slot14 = var2;
            return var1;
        }
    };
    var2['FRIEND_INVITES_FETCH_RESPONSE'] = var10;
    var10 = function handleInstantInviteClear(arg1) {
        var2 = _closure1_slot10;
        var1 = arg1;
        var1 = var1.channelId;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var2['INSTANT_INVITE_CLEAR'] = var10;
    var10 = function handleReceivedInstallationIdSet(arg1) {
        var2 = arg1;
        var1 = global;
        var5 = var1.Map;
        var8 = _closure1_slot17;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var9 = var4;
        var3 = new var9[var5](var8, var7);
        var5 = var3 instanceof Object ? var3 : var4;
        _closure1_slot17 = var5;
        var4 = var5.set;
        var6 = _closure1_slot19;
        var3 = var2.inviteCode;
        var1 = undefined;
        var3 = var6.bind(var1)(var3);
        var2 = var2.receivedInstallationId;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET'] = var10;
    var2['INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR'] = var9;
    var9 = function handleInviteModalClose(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var2 = var1.inviteCode;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0011_ip = 45; continue _fun0011 }
case 46:
            var4 = _closure1_slot20;
            var3 = {};
            var3['inviteCode'] = var2;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 45:
            return var1;
        }
    };
    var2['INVITE_MODAL_CLOSE'] = var9;
    var4 = function handleLogout() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = _closure1_slot17;
            var3 = var1.size;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0012_ip = 47; continue _fun0012 }
case 46:
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var4 = var3;
            var1 = new var4[var1](var3);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot17 = var1;
            var1 = undefined;
            return var1;
case 47:
            var1 = false;
            return var1;
        }
    };
    var2['LOGOUT'] = var4;
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
    var4 = 'stores/InstantInviteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();