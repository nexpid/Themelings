// app/modules/guild_member_verification/UserGuildJoinRequestStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var2 = function joinRequestFromServer(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.join_request_id;
        var1['joinRequestId'] = var3;
        var3 = var2.guild_id;
        var1['guildId'] = var3;
        var3 = var2.user_id;
        var1['userId'] = var3;
        var3 = var2.user;
        var1['user'] = var3;
        var3 = var2.created_at;
        var1['createdAt'] = var3;
        var3 = var2.form_responses;
        var1['formResponses'] = var3;
        var3 = var2.rejection_reason;
        var1['rejectionReason'] = var3;
        var3 = var2.application_status;
        var1['applicationStatus'] = var3;
        var3 = var2.actioned_at;
        var1['actionedAt'] = var3;
        var3 = var2.actioned_by_user;
        var1['actionedByUser'] = var3;
        var3 = var2.last_seen;
        var1['lastSeen'] = var3;
        var2 = var2.interview_channel_id;
        var1['interviewChannelId'] = var2;
        return var1;
    };
    var _closure1_slot14 = var2;
    var1 = function deleteJoinRequest(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot9;
            var1 = delete var1[var3];
            var1 = _closure1_slot8;
            if(!(var1 === var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = null;
            _closure1_slot8 = var1;
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var10 = function handleGatewayJoinRequestUpdate(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var5 = var1.request;
            var6 = null;
            if(!(var6 != var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = _closure1_slot14;
            var2 = undefined;
            var5 = var4.bind(var2)(var5);
            var7 = _closure1_slot7;
            var4 = var7.getCurrentUser;
            var4 = var4.bind(var7)();
            if(!(var6 != var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var6 = var5.userId;
            var4 = var4.id;
            if(!(var6 === var4)) { _fun0003_ip = 12; continue _fun0003 }
case 10:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 6;
            var4 = var7[var4];
            var6 = var6.bind(var2)(var4);
            var4 = var6.isApprovedAndAcked;
            var4 = var4.bind(var6)(var5);
            if(var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var4 = _closure1_slot9;
            var4[var3] = var5;
            _fun0003_ip = 8; continue _fun0003;
case 13:
            var1 = _closure1_slot15;
            var1 = var1.bind(var2)(var3);
case 8:
            var1 = undefined;
            return var1;
case 12:
            var1 = false;
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var9 = var11.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var11)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = null;
    var _closure1_slot8 = var4;
    var4 = {};
    var _closure1_slot9 = var4;
    var4 = false;
    var _closure1_slot10 = var4;
    var4 = {};
    var _closure1_slot11 = var4;
    var4 = {};
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function UserGuildJoinRequestStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 15; continue _fun0004 }
case 11:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 16; continue _fun0004;
case 15:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 16:
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
        var1 = 'getRequest';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = _closure1_slot9;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'computeGuildIds';
        var5['key'] = var7;
        var7 = function value() {
            var2 = global;
            var4 = var2.Object;
            var3 = var4.values;
            var2 = _closure1_slot9;
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var1 = var2.guildId;
case 17:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getJoinRequestGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var1 = _closure1_slot11;
                var3 = var1[var5];
                var1 = null;
                var3 = var1 != var3;
                if(!var3) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.fromGuildBasic;
                var2 = _closure1_slot11;
                var2 = var2[var5];
                var1 = var3.bind(var4)(var2);
case 19:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasFetchedRequestToJoinGuilds';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasJoinRequestCoackmark';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot8;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getCooldown';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'UserGuildJoinRequestStore';
    var9['displayName'] = var4;
    var4 = 9;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var11 = function handleConnectionOpen(arg1) {
        var1 = arg1;
        var3 = var1.guildJoinRequests;
        var1 = false;
        _closure1_slot10 = var1;
        var1 = {};
        _closure1_slot11 = var1;
        var1 = {};
        _closure1_slot9 = var1;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var3 = var5.guild_id;
                var1 = null;
                if(!(var1 != var3)) { _fun0007_ip = 21; continue _fun0007 }
case 18:
                var2 = _closure1_slot9;
                var4 = _closure1_slot14;
                var1 = undefined;
                var1 = var4.bind(var1)(var5);
                var2[var3] = var1;
case 21:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['CONNECTION_OPEN'] = var11;
    var4['GUILD_JOIN_REQUEST_UPDATE'] = var10;
    var4['GUILD_JOIN_REQUEST_CREATE'] = var10;
    var10 = function handleRemoveJoinRequest(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot15;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['GUILD_JOIN_REQUEST_DELETE'] = var10;
    var10 = function handleJoinRequestUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var5 = var1.request;
            var3 = var1.guildId;
            var1 = null;
            if(!(var1 == var5)) { _fun0008_ip = 21; continue _fun0008 }
case 9:
            var2 = _closure1_slot15;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            _fun0008_ip = 22; continue _fun0008;
case 21:
            var4 = _closure1_slot14;
            var2 = undefined;
            var5 = var4.bind(var2)(var5);
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 6;
            var4 = var7[var4];
            var6 = var6.bind(var2)(var4);
            var4 = var6.isApprovedAndAcked;
            var4 = var4.bind(var6)(var5);
            if(var4) { _fun0008_ip = 23; continue _fun0008 }
case 24:
            var4 = _closure1_slot9;
            var4[var3] = var5;
            _fun0008_ip = 22; continue _fun0008;
case 23:
            var1 = _closure1_slot15;
            var1 = var1.bind(var2)(var3);
case 22:
            var1 = undefined;
            return var1;
        }
    };
    var4['USER_GUILD_JOIN_REQUEST_UPDATE'] = var10;
    var10 = function handleGuildLeave(arg1) {
        var3 = _closure1_slot15;
        var1 = arg1;
        var1 = var1.guild;
        var2 = var1.id;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['GUILD_DELETE'] = var10;
    var10 = function handleJoinRequestGuildsFetch(arg1) {
        var1 = arg1;
        var3 = var1.guilds;
        var1 = true;
        _closure1_slot10 = var1;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var3 = var1.id;
            var7 = var1.name;
            var6 = var1.features;
            var5 = var1.icon;
            var4 = var1.splash;
            var2 = _closure1_slot11;
            var1 = {};
            var1['id'] = var3;
            var1['name'] = var7;
            var1['features'] = var6;
            var1['icon'] = var5;
            var1['splash'] = var4;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['USER_JOIN_REQUEST_GUILDS_FETCH'] = var10;
    var10 = function handleVerificationFormUpdate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = var1.form;
            var4 = var1.guildId;
            var7 = null;
            var5 = var7 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0009_ip = 25; continue _fun0009 }
case 26:
            var3 = var2.guild;
case 25:
            if(!(var7 != var3)) { _fun0009_ip = 27; continue _fun0009 }
case 21:
            var2 = var2.guild;
            var10 = var2.id;
            var9 = var2.name;
            var8 = var2.icon;
            var6 = var2.features;
            var5 = var2.splash;
            var3 = _closure1_slot11;
            var2 = {};
            var2['id'] = var10;
            var2['name'] = var9;
            var2['icon'] = var8;
            if(!(var7 == var6)) { _fun0009_ip = 28; continue _fun0009 }
case 29:
            var6 = new Array(0);
case 28:
            var2['features'] = var6;
            var2['splash'] = var5;
            var3[var4] = var2;
case 27:
            return var1;
        }
    };
    var4['MEMBER_VERIFICATION_FORM_UPDATE'] = var10;
    var10 = function handleInviteSuccess(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var1 = var1.invite;
            var2 = var1.guild;
            var8 = var1.join_request;
            var6 = null;
            if(!(var6 != var2)) { _fun0010_ip = 30; continue _fun0010 }
case 31:
            if(!(var6 != var8)) { _fun0010_ip = 30; continue _fun0010 }
case 32:
            var5 = var8.guild_id;
            var4 = _closure1_slot9;
            var7 = _closure1_slot14;
            var3 = undefined;
            var3 = var7.bind(var3)(var8);
            var4[var5] = var3;
            var3 = var2.id;
            var8 = var2.name;
            var7 = var2.icon;
            var5 = var2.features;
            var4 = var2.splash;
            var2 = _closure1_slot11;
            var1 = {};
            var1['id'] = var3;
            var1['name'] = var8;
            var1['icon'] = var7;
            if(!(var6 == var5)) { _fun0010_ip = 33; continue _fun0010 }
case 34:
            var5 = new Array(0);
case 33:
            var1['features'] = var5;
            var1['splash'] = var4;
            var2[var3] = var1;
case 30:
            var1 = undefined;
            return var1;
        }
    };
    var4['INVITE_ACCEPT_SUCCESS'] = var10;
    var10 = function handleAckApprovedGuildJoinRequest(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot15;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var4['ACK_APPROVED_GUILD_JOIN_REQUEST'] = var10;
    var10 = function handleShowCoachmark(arg1) {
        var1 = arg1;
        var2 = var1.guildId;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var4['USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW'] = var10;
    var10 = function handleClearCoachmark() {
        var1 = null;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var4['USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR'] = var10;
    var5 = function handleJoinRequestCooldownFetch(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var4 = var1.cooldown;
            var2 = _closure1_slot12;
            var1 = null;
            var5 = var1 != var4;
            var1 = 0;
            if(!var5) { _fun0011_ip = 35; continue _fun0011 }
case 25:
            var1 = var4;
case 35:
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_member_verification/UserGuildJoinRequestStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['joinRequestFromServer'] = var2;
    return var1;
})();