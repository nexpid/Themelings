// app/modules/gateway/dispatchSocketMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot24;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot24;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var8 = function defineSimpleDispatch(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg2;
            var3 = _closure1_slot23;
            var1 = undefined;
            var2 = arg1;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var9 = var3.value;
            var8 = _closure1_slot22;
            var2 = {};
            var10 = function preload() {
                var1 = null;
                return var1;
            };
            var2['preload'] = var10;
            var2['dispatch'] = var6;
            var8[var9] = var2;
            var8 = var4.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 36:
            return var1;
        }
    };
    var10 = function definePreloadableDispatch(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg2;
            var6 = arg3;
            var3 = _closure1_slot23;
            var1 = undefined;
            var2 = arg1;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var9 = var3.value;
            var8 = _closure1_slot22;
            var2 = {};
            var2['preload'] = var7;
            var2['dispatch'] = var6;
            var8[var9] = var2;
            var8 = var4.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0005_ip = 39; continue _fun0005 }
case 38:
            return var1;
        }
    };
    var1 = function dispatchVoiceStateUpdates(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = new Array(0);
            var5 = _closure1_slot23;
            var1 = undefined;
            var3 = arg1;
            var8 = var5.bind(var1)(var3);
            var5 = var8.bind(var1)();
            var3 = var5.done;
            var7 = null;
            if(var3) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var10 = var5.value;
            var3 = var10.member;
            if(!(var7 != var3)) { _fun0006_ip = 9; continue _fun0006 }
case 42:
            var12 = _closure1_slot27;
            var11 = var10.guild_id;
            var3 = var10.member;
            var9 = var3.user;
            var3 = var10.member;
            var3 = var12.bind(var1)(var11, var9, var3);
case 9:
            var9 = var4.push;
            var3 = {};
            var11 = var10.user_id;
            var3['userId'] = var11;
            var11 = var10.guild_id;
            var3['guildId'] = var11;
            var11 = var10.session_id;
            var3['sessionId'] = var11;
            var11 = var10.channel_id;
            var3['channelId'] = var11;
            var11 = var10.mute;
            var3['mute'] = var11;
            var11 = var10.deaf;
            var3['deaf'] = var11;
            var11 = var10.self_mute;
            var3['selfMute'] = var11;
            var11 = var10.self_deaf;
            var3['selfDeaf'] = var11;
            var11 = var10.self_video;
            if(var11) { _fun0006_ip = 19; continue _fun0006 }
case 43:
            var11 = false;
case 19:
            var3['selfVideo'] = var11;
            var11 = var10.suppress;
            var3['suppress'] = var11;
            var11 = var10.self_stream;
            if(var11) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var11 = false;
case 44:
            var3['selfStream'] = var11;
            var12 = var10.request_to_speak_timestamp;
            var13 = var7 != var12;
            var11 = null;
            if(!var13) { _fun0006_ip = 46; continue _fun0006 }
case 21:
            var11 = var12;
case 46:
            var3['requestToSpeakTimestamp'] = var11;
            var12 = var10.discoverable;
            var11 = var7 == var12;
            if(var11) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var11 = var12;
case 47:
            var3['discoverable'] = var11;
            var13 = _closure1_slot14;
            var12 = var13.getUserVoiceChannelId;
            var11 = var10.guild_id;
            var10 = var10.user_id;
            var10 = var12.bind(var13)(var11, var10);
            var3['oldChannelId'] = var10;
            var3 = var9.bind(var4)(var3);
            var9 = var8.bind(var1)();
            var3 = var9.done;
            var5 = var9;
            if(!var3) { _fun0006_ip = 41; continue _fun0006 }
case 40:
            var3 = _closure1_slot26;
            var2 = {};
            var5 = 'VOICE_STATE_UPDATES';
            var2['type'] = var5;
            var2['voiceStates'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function dispatchOrResetSocket(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 31;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.dispatch;
        var4 = var3.bind(var4)(var5);
        var3 = var4.catch;
        var2 = function(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.socket;
            var2 = var3.resetSocketOnDispatchError;
            var1 = {};
            var4 = arg1;
            var1['error'] = var4;
            var4 = _closure2_slot0;
            var4 = var4.type;
            var1['action'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function dispatchGuildMemberAdd(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var17 = arg1;
            var16 = arg2;
            var1 = arg3;
            var15 = var1.roles;
            var14 = var1.nick;
            var13 = var1.avatar;
            var12 = var1.avatar_decoration_data;
            var6 = var1.flags;
            var11 = var1.premium_since;
            var10 = var1.pending;
            var9 = var1.joined_at;
            var8 = var1.communication_disabled_until;
            var7 = var1.unusual_dm_activity_until;
            var5 = var1.collectibles;
            var19 = var1.display_name_styles;
            var4 = _closure1_slot11;
            var3 = var4.getMember;
            var1 = var16.id;
            var18 = var3.bind(var4)(var17, var1);
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 23;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.parseServerDisplayNameStyles;
            var4 = var3.bind(var4)(var19);
            var21 = null;
            var3 = var21 != var18;
            if(!var3) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var19 = var18.nick;
            var3 = var19 === var14;
case 49:
            if(!var3) { _fun0007_ip = 17; continue _fun0007 }
case 51:
            var19 = var18.avatar;
            var3 = var19 === var13;
case 17:
            if(!var3) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var20 = _closure1_slot1;
            var22 = _closure1_slot3;
            var19 = 20;
            var19 = var22[var19];
            var22 = var20.bind(var1)(var19);
            var20 = var22.isEqual;
            var19 = var18.roles;
            var3 = var20.bind(var22)(var19, var15);
case 52:
            if(!var3) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var20 = _closure1_slot0;
            var22 = _closure1_slot3;
            var19 = 32;
            var19 = var22[var19];
            var23 = var20.bind(var1)(var19);
            var22 = var23.isEqualAvatarDecoration;
            var19 = var18.avatarDecoration;
            var24 = var21 != var19;
            var20 = null;
            if(!var24) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var20 = var19;
case 56:
            var24 = var21 != var12;
            var19 = null;
            if(!var24) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var19 = var12;
case 58:
            var3 = var22.bind(var23)(var20, var19);
case 54:
            if(!var3) { _fun0007_ip = 60; continue _fun0007 }
case 61:
            var19 = var18.premiumSince;
            var3 = var19 === var11;
case 60:
            if(!var3) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var19 = var18.isPending;
            var3 = var19 === var10;
case 62:
            if(!var3) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var19 = var18.joinedAt;
            var3 = var19 === var9;
case 64:
            if(!var3) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var19 = var18.communicationDisabledUntil;
            var3 = var19 === var8;
case 66:
            if(!var3) { _fun0007_ip = 68; continue _fun0007 }
case 26:
            var19 = var18.flags;
            var3 = var19 === var6;
case 68:
            if(!var3) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var19 = var18.unusualDMActivityUntil;
            var22 = var21 != var19;
            var20 = null;
            if(!var22) { _fun0007_ip = 71; continue _fun0007 }
case 72:
            var20 = var19;
case 71:
            var22 = var21 != var7;
            var19 = null;
            if(!var22) { _fun0007_ip = 73; continue _fun0007 }
case 74:
            var19 = var7;
case 73:
            var3 = var20 === var19;
case 69:
            if(!var3) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var20 = _closure1_slot1;
            var22 = _closure1_slot3;
            var19 = 20;
            var19 = var22[var19];
            var23 = var20.bind(var1)(var19);
            var22 = var23.isEqual;
            var19 = var18.collectibles;
            var24 = var21 != var19;
            var20 = null;
            if(!var24) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var20 = var19;
case 77:
            var24 = var21 != var5;
            var19 = null;
            if(!var24) { _fun0007_ip = 79; continue _fun0007 }
case 80:
            var19 = var5;
case 79:
            var3 = var22.bind(var23)(var20, var19);
case 75:
            if(!var3) { _fun0007_ip = 81; continue _fun0007 }
case 82:
            var20 = _closure1_slot1;
            var22 = _closure1_slot3;
            var19 = 20;
            var19 = var22[var19];
            var20 = var20.bind(var1)(var19);
            var19 = var20.isEqual;
            var22 = var18.displayNameStyles;
            var23 = var21 != var22;
            var18 = null;
            if(!var23) { _fun0007_ip = 83; continue _fun0007 }
case 84:
            var18 = var22;
case 83:
            var22 = var21 != var4;
            var21 = null;
            if(!var22) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var21 = var4;
case 85:
            var3 = var19.bind(var20)(var18, var21);
case 81:
            if(var3) { _fun0007_ip = 87; continue _fun0007 }
case 88:
            var3 = _closure1_slot26;
            var2 = {};
            var18 = 'GUILD_MEMBER_ADD';
            var2['type'] = var18;
            var2['guildId'] = var17;
            var2['user'] = var16;
            var2['roles'] = var15;
            var2['nick'] = var14;
            var2['avatar'] = var13;
            var2['avatarDecoration'] = var12;
            var2['premiumSince'] = var11;
            var2['isPending'] = var10;
            var2['joinedAt'] = var9;
            var2['communicationDisabledUntil'] = var8;
            var2['unusualDMActivityUntil'] = var7;
            var2['flags'] = var6;
            var2['collectibles'] = var5;
            var2['displayNameStyles'] = var4;
            var2 = var3.bind(var1)(var2);
case 87:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function dispatchMessageMembers(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var8 = var2.member;
            var3 = var2.mentions;
            var7 = var2.author;
            var6 = var2.guild_id;
            var _closure2_slot0 = var6;
            var2 = null;
            var4 = var2 != var8;
            if(!var4) { _fun0008_ip = 89; continue _fun0008 }
case 90:
            var4 = var2 != var6;
case 89:
            if(!var4) { _fun0008_ip = 91; continue _fun0008 }
case 92:
            var5 = _closure1_slot27;
            var4 = undefined;
            var4 = var5.bind(var4)(var6, var7, var8);
case 91:
            if(!(var2 != var3)) { _fun0008_ip = 93; continue _fun0008 }
case 94:
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = arg1;
                    var1 = var5.member;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0009_ip = 95; continue _fun0009 }
case 96:
                    var2 = _closure2_slot0;
                    if(!(var3 != var2)) { _fun0009_ip = 95; continue _fun0009 }
case 97:
                    var4 = var5.member;
                    var2 = delete var5.member;
                    var3 = _closure1_slot27;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var5, var4);
case 95:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 93:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function convertSessions(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var1 = {};
                var3 = var2.session_id;
                var1['sessionId'] = var3;
                var3 = var2.last_modified;
                var1['lastModified'] = var3;
                var3 = var2.status;
                var1['status'] = var3;
                var3 = var2.activities;
                var1['activities'] = var3;
                var3 = var2.hidden_activities;
                var4 = null;
                if(!(var4 == var3)) { _fun0010_ip = 98; continue _fun0010 }
case 7:
                var3 = new Array(0);
case 98:
                var1['hiddenActivities'] = var3;
                var3 = var2.active;
                var3 = !var3;
                var3 = !var3;
                var1['active'] = var3;
                var2 = var2.client_info;
                var1['clientInfo'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function dispatchPresence(arg1) {
        var1 = arg1;
        var10 = var1.guildId;
        var9 = var1.user;
        var8 = var1.status;
        var6 = var1.activities;
        var5 = var1.hiddenActivities;
        var7 = var1.clientStatus;
        var4 = var1.processedAtTimestamp;
        var3 = _closure1_slot21;
        var2 = var3.add;
        var1 = {};
        var1['guildId'] = var10;
        var1['user'] = var9;
        var1['status'] = var8;
        var1['clientStatus'] = var7;
        var1['activities'] = var6;
        var1['hiddenActivities'] = var5;
        var1['processedAtTimestamp'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = ['newly_created'];
    var _closure1_slot4 = var1;
    var1 = global;
    var11 = var1.Object;
    var7 = var11.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var11)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createChannelRecordFromServer;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var7 = var6[var4];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelLoader;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var11 = var9.bind(var1)(var4);
    var4 = var11.prototype;
    var7 = Object.create(var4, {constructor: {value: var11}});
    var18 = 'ConnectionStore';
    var19 = var7;
    var4 = new var19[var11](var18, var17);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot17 = var4;
    var7 = 12;
    var4 = var6[var7];
    var15 = var9.bind(var1)(var4);
    var4 = 13;
    var11 = var6[var4];
    var11 = var5.bind(var1)(var11);
    var18 = var11.socket;
    var11 = var15.prototype;
    var12 = Object.create(var11, {constructor: {value: var15}});
    var17 = function(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var6 = null;
            if(!(var6 == var1)) { _fun0011_ip = 37; continue _fun0011 }
case 99:
            var2 = {};
            var4 = 'CHANNEL_UPDATES';
            var2['type'] = var4;
            var4 = new Array(0);
            var2['channels'] = var4;
            var1 = var2;
case 37:
            var2 = _closure1_slot6;
            var4 = undefined;
            var2 = var2.bind(var4)(var3);
            var7 = _closure1_slot9;
            var5 = var7.getChannel;
            var3 = var3.id;
            var7 = var5.bind(var7)(var3);
            var3 = var6 == var7;
            var5 = undefined;
            if(var3) { _fun0011_ip = 100; continue _fun0011 }
case 101:
            var4 = var7.merge;
            var3 = {};
            var11 = var3;
            var10 = var2;
            var8 = copyDataProperties(var11, var10);
            var9 = var7.recipients;
            var8 = 'recipients';
            var3[var8] = var9;
            var9 = var2.bitrate;
            if(!(var6 == var9)) { _fun0011_ip = 102; continue _fun0011 }
case 103:
            var9 = var7.bitrate;
case 102:
            var8 = 'bitrate';
            var3[var8] = var9;
            var5 = var4.bind(var7)(var3);
case 100:
            var4 = var1.channels;
            var3 = var4.push;
            if(!(var6 != var5)) { _fun0011_ip = 104; continue _fun0011 }
case 105:
            var2 = var5;
case 104:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var16 = function(arg1) {
        var2 = 'CHANNEL_UPDATE';
        var1 = arg1;
        var1 = var2 !== var1;
        return var1;
    };
    var19 = var12;
    var11 = new var19[var15](var18, var17, var16, var15);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot18 = var11;
    var11 = var6[var7];
    var15 = var9.bind(var1)(var11);
    var11 = var6[var4];
    var11 = var5.bind(var1)(var11);
    var18 = var11.socket;
    var11 = var15.prototype;
    var12 = Object.create(var11, {constructor: {value: var15}});
    var17 = function(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var6 = arg2;
            var _closure2_slot0 = var6;
            var2 = null;
            if(!(var2 == var1)) { _fun0012_ip = 106; continue _fun0012 }
case 107:
            var2 = {};
            var3 = 'SOUNDBOARD_SOUNDS_RECEIVED';
            var2['type'] = var3;
            var3 = new Array(0);
            var2['updates'] = var3;
            var1 = var2;
case 106:
            var4 = var1.updates;
            var3 = var4.push;
            var2 = {};
            var7 = var6.guild_id;
            var2['guildId'] = var7;
            var7 = var6.soundboard_sounds;
            var6 = var7.map;
            var5 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.name;
                var1['name'] = var3;
                var3 = var2.sound_id;
                var1['soundId'] = var3;
                var3 = var2.emoji_name;
                var1['emojiName'] = var3;
                var3 = var2.emoji_id;
                var1['emojiId'] = var3;
                var3 = var2.user_id;
                var1['userId'] = var3;
                var3 = var2.volume;
                var1['volume'] = var3;
                var2 = var2.available;
                var1['available'] = var2;
                var2 = _closure2_slot0;
                var2 = var2.guild_id;
                var1['guildId'] = var2;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var2['sounds'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var16 = function(arg1) {
        var2 = 'SOUNDBOARD_SOUNDS';
        var1 = arg1;
        var1 = var2 !== var1;
        return var1;
    };
    var19 = var12;
    var11 = new var19[var15](var18, var17, var16, var15);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot19 = var11;
    var11 = var6[var7];
    var15 = var9.bind(var1)(var11);
    var11 = var6[var4];
    var11 = var5.bind(var1)(var11);
    var18 = var11.socket;
    var11 = var15.prototype;
    var12 = Object.create(var11, {constructor: {value: var15}});
    var17 = function(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0013_ip = 108; continue _fun0013 }
case 109:
            var2 = {};
            var3 = 'GUILD_MEMBERS_CHUNK_BATCH';
            var2['type'] = var3;
            var3 = new Array(0);
            var2['chunks'] = var3;
            var1 = var2;
case 108:
            var4 = var1.chunks;
            var3 = var4.push;
            var2 = arg2;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var16 = function(arg1) {
        var2 = 'GUILD_MEMBERS_CHUNK';
        var1 = arg1;
        var1 = var2 !== var1;
        return var1;
    };
    var19 = var12;
    var11 = new var19[var15](var18, var17, var16, var15);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot20 = var11;
    var7 = var6[var7];
    var12 = var9.bind(var1)(var7);
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var18 = var4.socket;
    var4 = var12.prototype;
    var7 = Object.create(var4, {constructor: {value: var12}});
    var17 = function(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0014_ip = 108; continue _fun0014 }
case 109:
            var2 = {};
            var3 = 'PRESENCE_UPDATES';
            var2['type'] = var3;
            var3 = new Array(0);
            var2['updates'] = var3;
            var1 = var2;
case 108:
            var4 = var1.updates;
            var3 = var4.push;
            var2 = arg2;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var16 = function(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var1 = 'PRESENCE_UPDATE';
            var1 = var1 !== var3;
            if(!var1) { _fun0015_ip = 110; continue _fun0015 }
case 32:
            var2 = 'GUILD_MEMBERS_CHUNK';
            var1 = var2 !== var3;
case 110:
            return var1;
        }
    };
    var19 = var7;
    var4 = new var19[var12](var18, var17, var16, var15);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var _closure1_slot22 = var4;
    var9 = ['INITIAL_GUILD'];
    var7 = function(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var4 = var2.data_mode;
            var3 = 'full';
            var1 = null;
            if(!(var3 !== var4)) { _fun0016_ip = 111; continue _fun0016 }
case 112:
            var4 = _closure1_slot10;
            var3 = var4.loadGuildIds;
            var5 = var2.id;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = var3.bind(var4)(var2);
case 111:
            return var1;
        }
    };
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 14;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.initialGuild;
        var3 = var4.measure;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.Emitter;
            var3 = var4.batched;
            var2 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var4 = _closure1_slot2;
                    var10 = _closure1_slot3;
                    var1 = 16;
                    var2 = var10[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var7 = var8.hydrateInitialGuild;
                    var5 = _closure2_slot0;
                    var9 = _closure1_slot0;
                    var4 = 13;
                    var4 = var10[var4];
                    var4 = var9.bind(var1)(var4);
                    var4 = var4.socket;
                    var4 = var4.identifyStartTime;
                    var7 = var7.bind(var8)(var5, var4);
                    var _closure4_slot0 = var7;
                    var5 = _closure1_slot13;
                    var4 = var5.getCurrentUser;
                    var5 = var4.bind(var5)();
                    var4 = null;
                    if(!(var4 != var5)) { _fun0017_ip = 113; continue _fun0017 }
case 114:
                    var5 = _closure1_slot26;
                    var4 = {};
                    var8 = 'GUILD_CREATE';
                    var4['type'] = var8;
                    var4['guild'] = var7;
                    var4 = var5.bind(var1)(var4);
                    var4 = {};
                    var8 = 'VOICE_STATE_UPDATES';
                    var4['type'] = var8;
                    var8 = var7.voice_states;
                    var7 = var8.map;
                    var6 = function(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                            var3 = arg1;
                            var1 = {};
                            var2 = var3.user_id;
                            var1['userId'] = var2;
                            var2 = _closure4_slot0;
                            var2 = var2.id;
                            var1['guildId'] = var2;
                            var2 = var3.session_id;
                            var1['sessionId'] = var2;
                            var2 = var3.channel_id;
                            var1['channelId'] = var2;
                            var2 = var3.mute;
                            var1['mute'] = var2;
                            var2 = var3.deaf;
                            var1['deaf'] = var2;
                            var2 = var3.self_mute;
                            var1['selfMute'] = var2;
                            var2 = var3.self_deaf;
                            var1['selfDeaf'] = var2;
                            var2 = var3.self_video;
                            if(var2) { _fun0018_ip = 115; continue _fun0018 }
case 116:
                            var2 = false;
case 115:
                            var1['selfVideo'] = var2;
                            var2 = var3.suppress;
                            var1['suppress'] = var2;
                            var2 = var3.self_stream;
                            if(var2) { _fun0018_ip = 117; continue _fun0018 }
case 118:
                            var2 = false;
case 117:
                            var1['selfStream'] = var2;
                            var5 = var3.request_to_speak_timestamp;
                            var2 = null;
                            var6 = var2 != var5;
                            var4 = null;
                            if(!var6) { _fun0018_ip = 15; continue _fun0018 }
case 119:
                            var4 = var5;
case 15:
                            var1['requestToSpeakTimestamp'] = var4;
                            var3 = var3.discoverable;
                            var2 = var2 == var3;
                            if(var2) { _fun0018_ip = 16; continue _fun0018 }
case 120:
                            var2 = var3;
case 16:
                            var1['discoverable'] = var2;
                            return var1;
                        }
                    };
                    var6 = var7.bind(var8)(var6);
                    var4['voiceStates'] = var6;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure1_slot17;
                    var3 = var4.log;
                    var2 = _closure2_slot0;
                    var6 = var2.id;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var2 = 'Dispatched INITIAL_GUILD ';
                    var2 = var5.bind(var2)(var6);
                    var2 = var3.bind(var4)(var2);
case 113:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var7 = ['READY_SUPPLEMENTAL'];
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 14;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.readySupplemental;
        var4 = var5.measure;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.Emitter;
            var3 = var4.batched;
            var2 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var6 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var5 = 14;
                    var4 = var1[var5];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var7 = var4.hydrateReadySupplemental;
                    var6 = var7.measure;
                    var4 = function() {
                        var3 = _closure1_slot2;
                        var7 = _closure1_slot3;
                        var2 = 16;
                        var2 = var7[var2];
                        var6 = undefined;
                        var4 = var3.bind(var6)(var2);
                        var3 = var4.hydrateReadySupplementalPayload;
                        var2 = _closure2_slot0;
                        var5 = _closure1_slot0;
                        var1 = 13;
                        var1 = var7[var1];
                        var1 = var5.bind(var6)(var1);
                        var1 = var1.socket;
                        var1 = var1.identifyStartTime;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var6 = var6.bind(var7)(var4);
                    _closure2_slot0 = var6;
                    var9 = function transformPresences(arg1) {
                        var3 = arg1;
                        var2 = var3.map;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var1 = {};
                            var3 = var2.user;
                            var1['user'] = var3;
                            var3 = var2.status;
                            var1['status'] = var3;
                            var3 = var2.client_status;
                            var1['clientStatus'] = var3;
                            var3 = var2.activities;
                            var1['activities'] = var3;
                            var3 = var2.hidden_activities;
                            var1['hiddenActivities'] = var3;
                            var2 = var2.processed_at_timestamp;
                            var1['processedAtTimestamp'] = var2;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var _closure4_slot0 = var9;
                    var8 = var6.guilds;
                    var7 = var8.filter;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.unavailable;
                        var1 = true;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var7 = var7.bind(var8)(var6);
                    var _closure4_slot1 = var7;
                    var8 = var7.forEach;
                    var6 = function(arg1) {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var3 = arg1;
                            var4 = _closure4_slot0;
                            var2 = var3.presences;
                            if(var2) { _fun0020_ip = 31; continue _fun0020 }
case 112:
                            var2 = new Array(0);
case 31:
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var3['presences'] = var2;
                            return var1;
                        }
                    };
                    var6 = var8.bind(var7)(var6);
                    var6 = _closure2_slot0;
                    var6 = var6.presences;
                    if(var6) { _fun0019_ip = 121; continue _fun0019 }
case 122:
                    var6 = new Array(0);
                    _fun0019_ip = 123; continue _fun0019;
case 121:
                    var8 = _closure2_slot0;
                    var8 = var8.presences;
                    var6 = var9.bind(var1)(var8);
case 123:
                    var _closure4_slot2 = var6;
                    var6 = _closure2_slot0;
                    var10 = var6.lazy_private_channels;
                    var6 = null;
                    if(!(var6 == var10)) { _fun0019_ip = 124; continue _fun0019 }
case 17:
                    var10 = new Array(0);
case 124:
                    var9 = var10.map;
                    var8 = function(arg1) {
                        var3 = _closure1_slot6;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var8 = var9.bind(var10)(var8);
                    var _closure4_slot3 = var8;
                    var4 = _closure2_slot0;
                    var4 = var4.game_invites;
                    if(!(var6 == var4)) { _fun0019_ip = 44; continue _fun0019 }
case 52:
                    var4 = new Array(0);
case 44:
                    var _closure4_slot4 = var4;
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var5 = var4[var5];
                    var5 = var6.bind(var1)(var5);
                    var8 = var5.dispatchReadySupplemental;
                    var6 = var8.measure;
                    var5 = function() {
                        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                            var3 = _closure1_slot26;
                            var2 = {};
                            var1 = 'CONNECTION_OPEN_SUPPLEMENTAL';
                            var2['type'] = var1;
                            var4 = _closure4_slot1;
                            var2['guilds'] = var4;
                            var4 = _closure4_slot2;
                            var2['presences'] = var4;
                            var4 = _closure4_slot3;
                            var2['lazyPrivateChannels'] = var4;
                            var1 = _closure4_slot4;
                            var2['gameInvites'] = var1;
                            var1 = _closure2_slot0;
                            var5 = var1.user_activities;
                            var1 = null;
                            var6 = var1 != var5;
                            var1 = undefined;
                            var4 = undefined;
                            if(!var6) { _fun0021_ip = 93; continue _fun0021 }
case 125:
                            var4 = var5;
case 93:
                            var2['userActivities'] = var4;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var5 = var6.bind(var8)(var5);
                    var6 = new Array(0);
                    var _closure4_slot5 = var6;
                    var5 = var7.forEach;
                    var3 = function(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var3 = var2.voice_states;
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                                var5 = arg1;
                                var3 = _closure4_slot5;
                                var2 = var3.push;
                                var1 = {};
                                var4 = var5.user_id;
                                var1['userId'] = var4;
                                var4 = _closure5_slot0;
                                var4 = var4.id;
                                var1['guildId'] = var4;
                                var4 = var5.session_id;
                                var1['sessionId'] = var4;
                                var4 = var5.channel_id;
                                var1['channelId'] = var4;
                                var4 = var5.mute;
                                var1['mute'] = var4;
                                var4 = var5.deaf;
                                var1['deaf'] = var4;
                                var4 = var5.self_mute;
                                var1['selfMute'] = var4;
                                var4 = var5.self_deaf;
                                var1['selfDeaf'] = var4;
                                var4 = var5.self_video;
                                if(var4) { _fun0022_ip = 126; continue _fun0022 }
case 127:
                                var4 = false;
case 126:
                                var1['selfVideo'] = var4;
                                var4 = var5.suppress;
                                var1['suppress'] = var4;
                                var4 = var5.self_stream;
                                if(var4) { _fun0022_ip = 128; continue _fun0022 }
case 129:
                                var4 = false;
case 128:
                                var1['selfStream'] = var4;
                                var7 = var5.request_to_speak_timestamp;
                                var4 = null;
                                var8 = var4 != var7;
                                var6 = null;
                                if(!var8) { _fun0022_ip = 130; continue _fun0022 }
case 131:
                                var6 = var7;
case 130:
                                var1['requestToSpeakTimestamp'] = var6;
                                var5 = var5.discoverable;
                                var4 = var4 == var5;
                                if(var4) { _fun0022_ip = 132; continue _fun0022 }
case 133:
                                var4 = var5;
case 132:
                                var1['discoverable'] = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var3 = var5.bind(var7)(var3);
                    var5 = _closure1_slot26;
                    var3 = {'type': 'VOICE_STATE_UPDATES', 'voiceStates': null, 'initial': true};
                    var3['voiceStates'] = var6;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure1_slot0;
                    var2 = 13;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.localVoiceState;
                    var2 = var3.update;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = var4.bind(var5)(var3);
        var3 = global;
        var4 = var3.setTimeout;
        var3 = function() {
            var3 = _closure1_slot26;
            var2 = {};
            var1 = 'POST_CONNECTION_OPEN';
            var2['type'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = 2000;
        var2 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var9 = ['READY'];
    var7 = function(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var5 = _closure1_slot2;
            var4 = _closure1_slot3;
            var3 = 16;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.preloadReadyPayloadData;
            var6 = var3.bind(var4)();
            var3 = arg1;
            var5 = var3.guilds;
            var4 = var5.filter;
            var3 = function(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var4 = arg1;
                    var1 = var4.unavailable;
                    var1 = !var1;
                    if(!var1) { _fun0024_ip = 134; continue _fun0024 }
case 96:
                    var3 = var4.data_mode;
                    var2 = 'partial';
                    var2 = var2 === var3;
                    if(!var2) { _fun0024_ip = 135; continue _fun0024 }
case 136:
                    var3 = var4.partial_updates;
                    var3 = var3.channels;
                    var6 = null;
                    if(!(var6 == var3)) { _fun0024_ip = 137; continue _fun0024 }
case 111:
                    var3 = new Array(0);
case 137:
                    var3 = var3.length;
                    var5 = 0;
                    var3 = var3 > var5;
                    if(var3) { _fun0024_ip = 114; continue _fun0024 }
case 94:
                    var4 = var4.partial_updates;
                    var4 = var4.deleted_channel_ids;
                    if(!(var6 == var4)) { _fun0024_ip = 138; continue _fun0024 }
case 139:
                    var4 = new Array(0);
case 138:
                    var4 = var4.length;
                    var3 = var4 > var5;
case 114:
                    if(var3) { _fun0024_ip = 140; continue _fun0024 }
case 141:
                    var3 = undefined;
case 140:
                    var2 = var3;
case 135:
                    var1 = var2;
case 134:
                    return var1;
                }
            };
            var5 = var4.bind(var5)(var3);
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = _closure1_slot10;
            var2 = var3.loadGuildIds;
            var5 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 == var5)) { _fun0023_ip = 103; continue _fun0023 }
case 142:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var5 = var2.bind(var3)();
case 103:
            var2 = global;
            var4 = var2.Promise;
            var3 = var4.all;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                    var4 = var1().value;
                    var3 = var2;
                    var1 = undefined;
                    var3 = var3 === var1;
                    if(var3) { _fun0025_ip = 143; continue _fun0025 }
case 144:
                    var1 = var4;
case 143:
                    if(var3) { _fun0025_ip = 108; continue _fun0025 }
case 34:
                    var2.return();
case 108:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var4 = function(arg1, arg2, arg3) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var3 = arg3;
            var _closure2_slot1 = var3;
            var1 = var1.user;
            var3 = var1.bot;
            if(var3) { _fun0026_ip = 145; continue _fun0026 }
case 33:
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var3 = 14;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var4 = var3.ready;
            var3 = var4.measure;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.Emitter;
                var3 = var4.batched;
                var2 = function() {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var8 = 14;
                        var4 = var1[var8];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var6 = var4.hydrateReady;
                        var5 = var6.measure;
                        var4 = function() {
                            var3 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var1 = 16;
                            var1 = var8[var1];
                            var7 = undefined;
                            var5 = var3.bind(var7)(var1);
                            var4 = var5.hydrateReadyPayloadPrioritized;
                            var3 = _closure2_slot0;
                            var6 = _closure1_slot0;
                            var2 = 13;
                            var2 = var8[var2];
                            var2 = var6.bind(var7)(var2);
                            var2 = var2.socket;
                            var2 = var2.identifyStartTime;
                            var1 = _closure2_slot1;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        };
                        var4 = var5.bind(var6)(var4);
                        _closure2_slot0 = var4;
                        var7 = var4.private_channels;
                        var6 = var7.map;
                        var4 = function(arg1) {
                            var3 = _closure1_slot6;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var4 = var6.bind(var7)(var4);
                        var _closure4_slot0 = var4;
                        var4 = _closure2_slot0;
                        var7 = var4.guilds;
                        var6 = var7.filter;
                        var4 = function(arg1) {
                            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                                var2 = arg1;
                                var1 = var2.unavailable;
                                var3 = true;
                                var1 = var3 === var1;
                                if(!var1) { _fun0028_ip = 34; continue _fun0028 }
case 107:
                                var2 = var2.geo_restricted;
                                var1 = var3 !== var2;
case 34:
                                return var1;
                            }
                        };
                        var7 = var6.bind(var7)(var4);
                        var6 = var7.map;
                        var4 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.id;
                            return var1;
                        };
                        var4 = var6.bind(var7)(var4);
                        var _closure4_slot1 = var4;
                        var4 = _closure2_slot0;
                        var7 = var4.guilds;
                        var6 = var7.filter;
                        var4 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.unavailable;
                            var1 = true;
                            var1 = var1 !== var2;
                            return var1;
                        };
                        var7 = var6.bind(var7)(var4);
                        var _closure4_slot2 = var7;
                        var4 = _closure2_slot0;
                        var9 = var4.guilds;
                        var6 = var9.filter;
                        var4 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.geo_restricted;
                            var1 = true;
                            var1 = var1 === var2;
                            return var1;
                        };
                        var4 = var6.bind(var9)(var4);
                        var _closure4_slot3 = var4;
                        var6 = var7.forEach;
                        var4 = function(arg1) {
                            var2 = new Array(0);
                            var1 = arg1;
                            var1['presences'] = var2;
                            var1 = undefined;
                            return var1;
                        };
                        var4 = var6.bind(var7)(var4);
                        var4 = _closure2_slot0;
                        var6 = var4.user_settings_proto;
                        var4 = null;
                        var7 = var4 == var6;
                        var6 = undefined;
                        if(var7) { _fun0027_ip = 146; continue _fun0027 }
case 147:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var7 = 17;
                        var7 = var10[var7];
                        var10 = var9.bind(var1)(var7);
                        var9 = var10.b64ToPreloadedUserSettingsProto;
                        var7 = _closure2_slot0;
                        var7 = var7.user_settings_proto;
                        var6 = var9.bind(var10)(var7);
case 146:
                        var _closure4_slot4 = var6;
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var9 = 18;
                        var9 = var6[var9];
                        var11 = var7.bind(var1)(var9);
                        var10 = 'AllGatewayConnectionStores';
                        var9 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 19;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var9 = var11.bind(var1)(var10, var9);
                        var6 = var6[var8];
                        var6 = var7.bind(var1)(var6);
                        var7 = var6.dispatchReady;
                        var6 = var7.measure;
                        var3 = function() {
                            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                                var3 = _closure1_slot26;
                                var2 = {};
                                var1 = 'CONNECTION_OPEN';
                                var2['type'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.session_id;
                                var2['sessionId'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.auth_session_id_hash;
                                var2['authSessionIdHash'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.static_client_session_id;
                                var2['staticAuthSessionId'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.user;
                                var2['user'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.users;
                                var2['users'] = var1;
                                var1 = _closure4_slot2;
                                var2['guilds'] = var1;
                                var1 = _closure4_slot0;
                                var2['initialPrivateChannels'] = var1;
                                var1 = _closure4_slot1;
                                var2['unavailableGuilds'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.read_state;
                                var2['readState'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.user_guild_settings;
                                var2['userGuildSettings'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.tutorial;
                                var2['tutorial'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.relationships;
                                var2['relationships'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.game_relationships;
                                var2['gameRelationships'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.friend_suggestion_count;
                                var2['friendSuggestionCount'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.presences;
                                var2['presences'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.analytics_token;
                                var2['analyticsToken'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.experiments;
                                var2['experiments'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.connected_accounts;
                                var2['connectedAccounts'] = var1;
                                var1 = _closure2_slot0;
                                var1 = var1.guild_experiments;
                                var2['guildExperiments'] = var1;
                                var1 = _closure2_slot0;
                                var9 = var1.apex_experiments;
                                var6 = null;
                                var10 = var6 != var9;
                                var1 = undefined;
                                var8 = undefined;
                                if(!var10) { _fun0029_ip = 148; continue _fun0029 }
case 67:
                                var8 = var9;
case 148:
                                var2['apexExperiments'] = var8;
                                var8 = _closure2_slot0;
                                var8 = var8.required_action;
                                var2['requiredAction'] = var8;
                                var8 = _closure2_slot0;
                                var8 = var8.consents;
                                var2['consents'] = var8;
                                var8 = _closure1_slot29;
                                var7 = _closure2_slot0;
                                var7 = var7.sessions;
                                if(var7) { _fun0029_ip = 69; continue _fun0029 }
case 73:
                                var7 = new Array(0);
case 69:
                                var7 = var8.bind(var1)(var7);
                                var2['sessions'] = var7;
                                var7 = _closure2_slot0;
                                var7 = var7.pending_payments;
                                var2['pendingPayments'] = var7;
                                var7 = _closure2_slot0;
                                var7 = var7.country_code;
                                var8 = var6 != var7;
                                var6 = undefined;
                                if(!var8) { _fun0029_ip = 149; continue _fun0029 }
case 150:
                                var6 = var7;
case 149:
                                var2['countryCode'] = var6;
                                var6 = _closure2_slot0;
                                var6 = var6.guild_join_requests;
                                if(var6) { _fun0029_ip = 151; continue _fun0029 }
case 152:
                                var6 = new Array(0);
case 151:
                                var2['guildJoinRequests'] = var6;
                                var6 = _closure4_slot4;
                                var2['userSettingsProto'] = var6;
                                var6 = _closure2_slot0;
                                var6 = var6.api_code_version;
                                var2['apiCodeVersion'] = var6;
                                var6 = _closure2_slot0;
                                var6 = var6.auth;
                                var2['auth'] = var6;
                                var6 = {};
                                var7 = _closure2_slot0;
                                var7 = var7.notification_settings;
                                var7 = var7.flags;
                                var6['flags'] = var7;
                                var2['notificationSettings'] = var6;
                                var5 = _closure4_slot3;
                                var2['geoRestrictedGuilds'] = var5;
                                var5 = _closure2_slot0;
                                var5 = var5.explicit_content_scan_version;
                                var2['explicitContentScanVersion'] = var5;
                                var4 = _closure2_slot0;
                                var4 = var4.failed_states;
                                var2['failedStates'] = var4;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            }
                        };
                        var3 = var6.bind(var7)(var3);
                        var3 = _closure2_slot0;
                        var3 = var3.auth_token;
                        if(!(var4 != var3)) { _fun0027_ip = 153; continue _fun0027 }
case 154:
                        var4 = _closure1_slot26;
                        var3 = {};
                        var6 = 'UPDATE_TOKEN';
                        var3['type'] = var6;
                        var6 = _closure2_slot0;
                        var6 = var6.auth_token;
                        var3['token'] = var6;
                        var5 = _closure2_slot0;
                        var5 = var5.user;
                        var5 = var5.id;
                        var3['userId'] = var5;
                        var3 = var4.bind(var1)(var3);
case 153:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 13;
                        var5 = var4[var2];
                        var5 = var3.bind(var1)(var5);
                        var6 = var5.localPresenceState;
                        var5 = var6.update;
                        var5 = var5.bind(var6)();
                        var2 = var4[var2];
                        var2 = var3.bind(var1)(var2);
                        var3 = var2.localVoiceState;
                        var2 = var3.update;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            _fun0026_ip = 140; continue _fun0026;
case 145:
            var3 = _closure1_slot26;
            var2 = {};
            var1 = 'LOGOUT';
            var2['type'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 140:
            var1 = undefined;
            return var1;
        }
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var7 = ['STATE_UPDATE'];
    var4 = function(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot26;
            var2 = {};
            var1 = 'CONNECTION_OPEN_STATE_UPDATE';
            var2['type'] = var1;
            var7 = var5.apex_experiments;
            var4 = null;
            var8 = var4 != var7;
            var1 = undefined;
            var6 = undefined;
            if(!var8) { _fun0030_ip = 106; continue _fun0030 }
case 155:
            var6 = var7;
case 106:
            var2['apexExperiments'] = var6;
            var5 = var5.user_activities;
            var6 = var4 != var5;
            var4 = undefined;
            if(!var6) { _fun0030_ip = 98; continue _fun0030 }
case 156:
            var4 = var5;
case 98:
            var2['userActivities'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['RESUMED'];
    var4 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot3;
        var3 = 13;
        var6 = var5[var3];
        var1 = undefined;
        var6 = var4.bind(var1)(var6);
        var7 = var6.localPresenceState;
        var6 = var7.forceUpdate;
        var6 = var6.bind(var7)();
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var4 = var3.localVoiceState;
        var3 = var4.forceUpdate;
        var3 = var3.bind(var4)();
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'CONNECTION_RESUMED';
        var2['type'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['TYPING_START'];
    var4 = function(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
            var3 = var1.member;
            var2 = null;
            if(!(var2 != var3)) { _fun0031_ip = 42; continue _fun0031 }
case 96:
            var6 = _closure1_slot27;
            var5 = var1.guild_id;
            var2 = var1.member;
            var4 = var2.user;
            var3 = var1.member;
            var2 = undefined;
            var2 = var6.bind(var2)(var5, var4, var3);
case 42:
            var3 = _closure1_slot26;
            var2 = {};
            var4 = 'TYPING_START';
            var2['type'] = var4;
            var4 = var1.channel_id;
            var2['channelId'] = var4;
            var1 = var1.user_id;
            var2['userId'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_RING_START'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_RING_START';
        var2['type'] = var4;
        var4 = var1.ringing;
        var2['ringing'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var1 = var1.guild_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_RING_STOP'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_RING_STOP';
        var2['type'] = var4;
        var4 = var1.ringing;
        var2['ringing'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var1 = var1.guild_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['ACTIVITY_START'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'ACTIVITY_START';
        var2['type'] = var4;
        var4 = var1.user_id;
        var2['userId'] = var4;
        var1 = var1.activity;
        var2['activity'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['ACTIVITY_USER_ACTION'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'ACTIVITY_USER_ACTION';
        var2['type'] = var4;
        var4 = var1.action_type;
        var2['actionType'] = var4;
        var4 = var1.user;
        var2['user'] = var4;
        var4 = var1.application_id;
        var2['applicationId'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var1 = var1.message_id;
        var2['messageId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var9 = ['MESSAGE_CREATE'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot28;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            var5 = var4.author;
            var3 = null;
            if(!(var3 != var5)) { _fun0032_ip = 36; continue _fun0032 }
case 157:
            var3 = _closure1_slot26;
            var2 = {'type': 'MESSAGE_CREATE', 'guildId': null, 'channelId': null, 'message': null, 'optimistic': false, 'isPushNotification': false};
            var5 = var4.guild_id;
            var2['guildId'] = var5;
            var5 = var4.channel_id;
            var2['channelId'] = var5;
            var2['message'] = var4;
            var2 = var3.bind(var1)(var2);
case 36:
            return var1;
        }
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var9 = ['MESSAGE_UPDATE'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        var4 = arg1;
        var3 = _closure1_slot28;
        var1 = undefined;
        var3 = var3.bind(var1)(var4);
        var3 = _closure1_slot26;
        var2 = {};
        var5 = 'MESSAGE_UPDATE';
        var2['type'] = var5;
        var5 = var4.guild_id;
        var2['guildId'] = var5;
        var2['message'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var9 = ['MESSAGE_DELETE'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'MESSAGE_DELETE';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var4 = var1.id;
        var2['id'] = var4;
        var1 = var1.channel_id;
        var2['channelId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var9 = ['MESSAGE_DELETE_BULK'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'MESSAGE_DELETE_BULK';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var4 = var1.ids;
        var2['ids'] = var4;
        var1 = var1.channel_id;
        var2['channelId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var9 = ['MESSAGE_ACK'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildFromChannelId;
        var1 = arg1;
        var1 = var1.channel_id;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'MESSAGE_ACK';
        var2['type'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var4 = var1.message_id;
        var2['messageId'] = var4;
        var4 = var1.manual;
        var2['manual'] = var4;
        var4 = var1.mention_count;
        var2['newMentionCount'] = var4;
        var1 = var1.version;
        var2['version'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var7 = ['GUILD_FEATURE_ACK'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_FEATURE_ACK';
        var2['type'] = var4;
        var4 = var1.resource_id;
        var2['id'] = var4;
        var4 = var1.ack_type;
        var2['ackType'] = var4;
        var1 = var1.entity_id;
        var2['ackedId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_NON_CHANNEL_ACK'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'USER_NON_CHANNEL_ACK';
        var2['type'] = var4;
        var4 = var1.ack_type;
        var2['ackType'] = var4;
        var1 = var1.entity_id;
        var2['ackedId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var9 = ['CHANNEL_PINS_ACK'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'CHANNEL_PINS_ACK';
        var2['type'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var4 = var1.timestamp;
        var2['timestamp'] = var4;
        var1 = var1.version;
        var2['version'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var9 = ['CHANNEL_PINS_UPDATE'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'CHANNEL_PINS_UPDATE';
        var2['type'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var1 = var1.last_pin_timestamp;
        var2['lastPinTimestamp'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var9 = ['CHANNEL_CREATE', 'CHANNEL_DELETE'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1, arg2) {
        var3 = _closure1_slot26;
        var2 = {};
        var4 = arg2;
        var2['type'] = var4;
        var5 = _closure1_slot6;
        var1 = undefined;
        var4 = arg1;
        var4 = var5.bind(var1)(var4);
        var2['channel'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var7 = ['VOICE_CHANNEL_STATUS_UPDATE'];
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = arg2;
        var2['type'] = var4;
        var4 = var1.id;
        var2['id'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.status;
        var2['status'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['VOICE_CHANNEL_START_TIME_UPDATE'];
    var4 = function(arg1, arg2) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot26;
            var2 = {};
            var4 = arg2;
            var2['type'] = var4;
            var4 = var1.id;
            var2['id'] = var4;
            var4 = var1.guild_id;
            var2['guildId'] = var4;
            var5 = var1.voice_start_time;
            var1 = null;
            var6 = var1 != var5;
            var1 = undefined;
            var4 = undefined;
            if(!var6) { _fun0033_ip = 158; continue _fun0033 }
case 28:
            var4 = var5;
case 158:
            var2['voiceStartTime'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['CHANNEL_STATUSES'];
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = arg2;
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.channels;
        var2['channels'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['CHANNEL_INFO'];
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = arg2;
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var5 = var1.channels;
        var4 = var5.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.status;
            var1['status'] = var3;
            var2 = var2.voice_start_time;
            var1['voiceStartTime'] = var2;
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var2['channels'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['CHANNEL_MEMBER_COUNT_UPDATE'];
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = arg2;
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var4 = var1.presence_count;
        var2['online'] = var4;
        var1 = var1.member_count;
        var2['total'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var9 = ['CHANNEL_UPDATE'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        var3 = _closure1_slot18;
        var2 = var3.add;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var9 = ['THREAD_CREATE', 'THREAD_UPDATE', 'THREAD_DELETE'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1, arg2) {
        var5 = arg1;
        var6 = var5.newly_created;
        var3 = _closure1_slot5;
        var2 = _closure1_slot4;
        var1 = undefined;
        var5 = var3.bind(var1)(var5, var2);
        var3 = _closure1_slot26;
        var2 = {};
        var7 = arg2;
        var2['type'] = var7;
        var2['isNewlyCreated'] = var6;
        var4 = _closure1_slot6;
        var4 = var4.bind(var1)(var5);
        var2['channel'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var9 = ['THREAD_LIST_SYNC'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot26;
            var2 = {};
            var1 = 'THREAD_LIST_SYNC';
            var2['type'] = var1;
            var1 = var4.guild_id;
            var2['guildId'] = var1;
            var7 = var4.threads;
            var5 = var7.map;
            var1 = function(arg1) {
                _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure1_slot9;
                    var4 = var5.getChannel;
                    var2 = var3.parent_id;
                    var2 = var4.bind(var5)(var2);
                    var4 = null;
                    if(!(var4 != var2)) { _fun0035_ip = 4; continue _fun0035 }
case 136:
                    var4 = var2.nsfw;
                    var3['nsfw'] = var4;
                    var2 = var2.type;
                    var3['parentChannelThreadType'] = var2;
case 4:
                    var2 = _closure1_slot6;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var1 = var5.bind(var7)(var1);
            var2['threads'] = var1;
            var1 = var4.most_recent_messages;
            var2['mostRecentMessages'] = var1;
            var7 = var4.members;
            var1 = undefined;
            var5 = undefined;
            if(!var7) { _fun0034_ip = 121; continue _fun0034 }
case 159:
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var6 = 20;
            var6 = var11[var6];
            var9 = var10.bind(var1)(var6);
            var8 = var9.map;
            var7 = var4.members;
            var6 = 21;
            var6 = var11[var6];
            var6 = var10.bind(var1)(var6);
            var5 = var8.bind(var9)(var7, var6);
case 121:
            var2['members'] = var5;
            var4 = var4.channel_ids;
            var2['channelIds'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var7 = ['THREAD_MEMBER_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'THREAD_MEMBER_UPDATE';
        var2['type'] = var4;
        var4 = var1.id;
        var2['id'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var4 = var1.user_id;
        var2['userId'] = var4;
        var4 = var1.flags;
        var2['flags'] = var4;
        var4 = var1.muted;
        var2['muted'] = var4;
        var4 = var1.mute_config;
        var2['muteConfig'] = var4;
        var1 = var1.join_timestamp;
        var2['joinTimestamp'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['THREAD_MEMBERS_UPDATE'];
    var4 = function(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot26;
            var2 = {};
            var1 = 'THREAD_MEMBERS_UPDATE';
            var2['type'] = var1;
            var1 = var4.id;
            var2['id'] = var1;
            var1 = var4.guild_id;
            var2['guildId'] = var1;
            var1 = var4.member_count;
            var2['memberCount'] = var1;
            var8 = var4.added_members;
            var1 = null;
            var7 = var1 == var8;
            var1 = undefined;
            var5 = undefined;
            if(var7) { _fun0036_ip = 160; continue _fun0036 }
case 101:
            var7 = var8.map;
            var6 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.id;
                var1['id'] = var3;
                var3 = _closure2_slot0;
                var3 = var3.guild_id;
                var1['guildId'] = var3;
                var3 = var2.user_id;
                var1['userId'] = var3;
                var3 = var2.flags;
                var1['flags'] = var3;
                var2 = var2.join_timestamp;
                var1['joinTimestamp'] = var2;
                return var1;
            };
            var5 = var7.bind(var8)(var6);
case 160:
            var2['addedMembers'] = var5;
            var5 = var4.removed_member_ids;
            var2['removedMemberIds'] = var5;
            var4 = var4.member_ids_preview;
            var2['memberIdsPreview'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['FORUM_UNREADS'];
    var4 = function(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var2 = var1.permission_denied;
            if(var2) { _fun0037_ip = 161; continue _fun0037 }
case 99:
            var3 = _closure1_slot26;
            var2 = {};
            var4 = 'FORUM_UNREADS';
            var2['type'] = var4;
            var4 = var1.channel_id;
            var2['channelId'] = var4;
            var5 = var1.threads;
            var4 = var5.map;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.thread_id;
                var1['threadId'] = var3;
                var3 = var2.missing;
                var1['missing'] = var3;
                var2 = var2.count;
                var1['count'] = var2;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            var2['threads'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 161:
            var1 = undefined;
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['SOUNDBOARD_SOUNDS'];
    var4 = function(arg1) {
        var3 = _closure1_slot19;
        var2 = var3.add;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['CHANNEL_RECIPIENT_ADD', 'CHANNEL_RECIPIENT_REMOVE'];
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var5 = _closure1_slot9;
        var4 = var5.getBasicChannel;
        var3 = var1.channel_id;
        var4 = var4.bind(var5)(var3);
        var3 = _closure1_slot26;
        var2 = {};
        var5 = arg2;
        var2['type'] = var5;
        var5 = var1.channel_id;
        var2['channelId'] = var5;
        var5 = var1.user;
        var2['user'] = var5;
        var1 = var1.nick;
        var2['nick'] = var1;
        var1 = null;
        var1 = var1 != var4;
        var2['isMember'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var9 = ['GUILD_CREATE'];
    var7 = function(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var2 = arg1;
            var4 = var2.data_mode;
            var3 = 'full';
            var1 = null;
            if(!(var3 !== var4)) { _fun0038_ip = 111; continue _fun0038 }
case 112:
            var4 = _closure1_slot10;
            var3 = var4.loadGuildIds;
            var5 = var2.id;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = var3.bind(var4)(var2);
case 111:
            return var1;
        }
    };
    var4 = function(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var3 = var1.unavailable;
            if(var3) { _fun0039_ip = 162; continue _fun0039 }
case 163:
            var4 = _closure1_slot2;
            var8 = _closure1_slot3;
            var3 = 16;
            var3 = var8[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var4.hydratePreviouslyUnavailableGuild;
            var7 = var3.bind(var4)(var1);
            var _closure2_slot0 = var7;
            var4 = _closure1_slot1;
            var3 = 22;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.createGuild;
            var3 = var3.bind(var4)(var7);
            var4 = _closure1_slot26;
            var3 = {};
            var8 = 'VOICE_STATE_UPDATES';
            var3['type'] = var8;
            var8 = var7.voice_states;
            var7 = var8.map;
            var6 = function(arg1) {
                _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                    var3 = arg1;
                    var1 = {};
                    var2 = var3.user_id;
                    var1['userId'] = var2;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1['guildId'] = var2;
                    var2 = var3.session_id;
                    var1['sessionId'] = var2;
                    var2 = var3.channel_id;
                    var1['channelId'] = var2;
                    var2 = var3.mute;
                    var1['mute'] = var2;
                    var2 = var3.deaf;
                    var1['deaf'] = var2;
                    var2 = var3.self_mute;
                    var1['selfMute'] = var2;
                    var2 = var3.self_deaf;
                    var1['selfDeaf'] = var2;
                    var2 = var3.self_video;
                    if(var2) { _fun0040_ip = 115; continue _fun0040 }
case 116:
                    var2 = false;
case 115:
                    var1['selfVideo'] = var2;
                    var2 = var3.suppress;
                    var1['suppress'] = var2;
                    var2 = var3.self_stream;
                    if(var2) { _fun0040_ip = 117; continue _fun0040 }
case 118:
                    var2 = false;
case 117:
                    var1['selfStream'] = var2;
                    var5 = var3.request_to_speak_timestamp;
                    var2 = null;
                    var6 = var2 != var5;
                    var4 = null;
                    if(!var6) { _fun0040_ip = 15; continue _fun0040 }
case 119:
                    var4 = var5;
case 15:
                    var1['requestToSpeakTimestamp'] = var4;
                    var3 = var3.discoverable;
                    var2 = var2 == var3;
                    if(var2) { _fun0040_ip = 16; continue _fun0040 }
case 120:
                    var2 = var3;
case 16:
                    var1['discoverable'] = var2;
                    return var1;
                }
            };
            var6 = var7.bind(var8)(var6);
            var3['voiceStates'] = var6;
            var3 = var4.bind(var5)(var3);
            _fun0039_ip = 164; continue _fun0039;
case 162:
            var3 = _closure1_slot26;
            var2 = {};
            var4 = 'GUILD_UNAVAILABLE';
            var2['type'] = var4;
            var1 = var1.id;
            var2['guildId'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 164:
            var1 = undefined;
            return var1;
        }
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var7 = ['GUILD_UPDATE'];
    var4 = function(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot26;
            var3 = {};
            var1 = 'GUILD_UPDATE';
            var3['type'] = var1;
            var3['guild'] = var4;
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var3 = var4.unavailable;
            if(!var3) { _fun0041_ip = 94; continue _fun0041 }
case 165:
            var3 = _closure1_slot26;
            var2 = {};
            var5 = 'GUILD_UNAVAILABLE';
            var2['type'] = var5;
            var4 = var4.id;
            var2['guildId'] = var4;
            var2 = var3.bind(var1)(var2);
case 94:
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_DELETE'];
    var4 = function(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot26;
            var3 = {};
            var1 = 'GUILD_DELETE';
            var3['type'] = var1;
            var3['guild'] = var4;
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var3 = var4.geo_restricted;
            if(var3) { _fun0042_ip = 166; continue _fun0042 }
case 165:
            var3 = var4.unavailable;
            if(!var3) { _fun0042_ip = 102; continue _fun0042 }
case 5:
            var5 = _closure1_slot26;
            var3 = {};
            var6 = 'GUILD_UNAVAILABLE';
            var3['type'] = var6;
            var6 = var4.id;
            var3['guildId'] = var6;
            var3 = var5.bind(var1)(var3);
            _fun0042_ip = 102; continue _fun0042;
case 166:
            var3 = _closure1_slot26;
            var2 = {};
            var5 = 'GUILD_GEO_RESTRICTED';
            var2['type'] = var5;
            var5 = var4.id;
            var2['guildId'] = var5;
            var5 = var4.icon;
            var2['icon'] = var5;
            var4 = var4.name;
            var2['name'] = var4;
            var2 = var3.bind(var1)(var2);
case 102:
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_MEMBERS_CHUNK'];
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 15;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.Emitter;
        var3 = var4.batched;
        var2 = function() {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var6 = _closure1_slot20;
                var5 = var6.add;
                var4 = {};
                var3 = _closure2_slot0;
                var7 = var3.guild_id;
                var4['guildId'] = var7;
                var7 = var3.members;
                var4['members'] = var7;
                var7 = var3.not_found;
                var4['notFound'] = var7;
                var4 = var5.bind(var6)(var4);
                var4 = var3.presences;
                var3 = null;
                if(!(var3 != var4)) { _fun0043_ip = 167; continue _fun0043 }
case 168:
                var2 = _closure2_slot0;
                var4 = var2.presences;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var1 = arg1;
                    var8 = var1.user;
                    var7 = var1.status;
                    var4 = var1.client_status;
                    var6 = var1.activities;
                    var5 = var1.hidden_activities;
                    var1 = var1.processed_at_timestamp;
                    var3 = _closure1_slot30;
                    var2 = {};
                    var9 = _closure2_slot0;
                    var9 = var9.guild_id;
                    var2['guildId'] = var9;
                    var2['user'] = var8;
                    var2['status'] = var7;
                    var2['activities'] = var6;
                    var2['hiddenActivities'] = var5;
                    var2['clientStatus'] = var4;
                    var2['processedAtTimestamp'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
case 167:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.flush;
                var2 = 'GUILD_MEMBERS_CHUNK';
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['THREAD_MEMBER_LIST_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 15;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.Emitter;
        var3 = var4.batched;
        var2 = function() {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var6 = _closure1_slot26;
                var5 = {};
                var1 = 'THREAD_MEMBER_LIST_UPDATE';
                var5['type'] = var1;
                var4 = _closure2_slot0;
                var1 = var4.guild_id;
                var5['guildId'] = var1;
                var1 = var4.thread_id;
                var5['threadId'] = var1;
                var1 = var4.members;
                var5['members'] = var1;
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var5 = var4.presences;
                var4 = null;
                if(!(var4 != var5)) { _fun0044_ip = 169; continue _fun0044 }
case 38:
                var3 = _closure2_slot0;
                var5 = var3.presences;
                var4 = var5.forEach;
                var3 = function(arg1) {
                    var1 = arg1;
                    var8 = var1.user;
                    var7 = var1.status;
                    var4 = var1.client_status;
                    var6 = var1.activities;
                    var5 = var1.hidden_activities;
                    var1 = var1.processed_at_timestamp;
                    var3 = _closure1_slot30;
                    var2 = {};
                    var9 = _closure2_slot0;
                    var9 = var9.guild_id;
                    var2['guildId'] = var9;
                    var2['user'] = var8;
                    var2['status'] = var7;
                    var2['activities'] = var6;
                    var2['hiddenActivities'] = var5;
                    var2['clientStatus'] = var4;
                    var2['processedAtTimestamp'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
case 169:
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 12;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.flush;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_BAN_ADD', 'GUILD_BAN_REMOVE', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'GUILD_MEMBER_REMOVE'];
    var4 = function(arg1, arg2) {
        var4 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var5 = arg2;
        var2['type'] = var5;
        var5 = var4.guild_id;
        var2['guildId'] = var5;
        var5 = var4.user;
        var2['user'] = var5;
        var5 = var4.avatar;
        var2['avatar'] = var5;
        var5 = var4.avatar_decoration_data;
        var2['avatarDecoration'] = var5;
        var5 = var4.roles;
        var2['roles'] = var5;
        var5 = var4.nick;
        var2['nick'] = var5;
        var5 = var4.premium_since;
        var2['premiumSince'] = var5;
        var5 = var4.pending;
        var2['isPending'] = var5;
        var5 = var4.joined_at;
        var2['joinedAt'] = var5;
        var5 = var4.communication_disabled_until;
        var2['communicationDisabledUntil'] = var5;
        var5 = var4.unusual_dm_activity_until;
        var2['unusualDMActivityUntil'] = var5;
        var5 = var4.flags;
        var2['flags'] = var5;
        var5 = var4.collectibles;
        var2['collectibles'] = var5;
        var6 = _closure1_slot0;
        var5 = _closure1_slot3;
        var1 = 23;
        var5 = var5[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var5);
        var5 = var6.parseServerDisplayNameStyles;
        var4 = var4.display_name_styles;
        var4 = var5.bind(var6)(var4);
        var2['displayNameStyles'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var9 = ['GUILD_ROLE_CREATE', 'GUILD_ROLE_UPDATE'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = arg2;
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.role;
        var2['role'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var9 = ['GUILD_ROLE_DELETE'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_ROLE_DELETE';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var4 = var1.role_id;
        var2['roleId'] = var4;
        var1 = var1.version;
        var2['version'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var7 = ['GUILD_EMOJIS_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_EMOJIS_UPDATE';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.emojis;
        var2['emojis'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_STICKERS_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_STICKERS_UPDATE';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.stickers;
        var2['stickers'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_INTEGRATIONS_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GUILD_INTEGRATIONS_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.guild_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['INTEGRATION_CREATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'INTEGRATION_CREATE';
        var2['type'] = var4;
        var4 = var1.application;
        var2['application'] = var4;
        var1 = var1.guild_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['INTEGRATION_DELETE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'INTEGRATION_DELETE';
        var2['type'] = var4;
        var4 = var1.application_id;
        var2['applicationId'] = var4;
        var1 = var1.guild_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'CURRENT_USER_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['user'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_SETTINGS_PROTO_UPDATE'];
    var4 = function(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 17;
            var2 = var3[var2];
            var3 = undefined;
            var7 = var5.bind(var3)(var2);
            var6 = var7.b64ToProtoWithType;
            var2 = var4.settings;
            var5 = var2.type;
            var2 = var4.settings;
            var2 = var2.proto;
            var6 = var6.bind(var7)(var5, var2);
            var2 = null;
            if(!(var2 != var6)) { _fun0045_ip = 170; continue _fun0045 }
case 168:
            var5 = 'string';
            var2 = typeof var6;
            if(!(var5 !== var2)) { _fun0045_ip = 100; continue _fun0045 }
case 36:
            var2 = _closure1_slot26;
            var1 = {};
            var5 = 'USER_SETTINGS_PROTO_UPDATE';
            var1['type'] = var5;
            var5 = {};
            var5['proto'] = var6;
            var6 = var4.settings;
            var6 = var6.type;
            var5['type'] = var6;
            var1['settings'] = var5;
            var4 = var4.partial;
            var1['partial'] = var4;
            var1 = var2.bind(var3)(var1);
case 170:
            return var3;
case 100:
            var1 = global;
            var2 = var1.Error;
            var1 = 'UserSettingsProto must not be a string';
            var1 = var2.bind(var3)(var1);
            throw var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_GUILD_SETTINGS_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'USER_GUILD_SETTINGS_FULL_UPDATE';
        var2['type'] = var1;
        var1 = new Array(1);
        var4 = arg1;
        var1[0] = var4;
        var2['userGuildSettings'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_CONNECTIONS_UPDATE'];
    var4 = function() {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'USER_CONNECTIONS_UPDATE';
        var2['type'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_REQUIRED_ACTION_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'USER_REQUIRED_ACTION_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.required_action;
        var2['requiredAction'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_NOTE_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'USER_NOTE_UPDATE';
        var2['type'] = var1;
        var4 = arg1;
        var5 = var2;
        var1 = copyDataProperties(var5, var4);
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['RELATIONSHIP_ADD'];
    var4 = function(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var1 = arg1;
            var3 = _closure1_slot26;
            var2 = {};
            var4 = 'RELATIONSHIP_ADD';
            var2['type'] = var4;
            var4 = {};
            var5 = var1.id;
            var4['id'] = var5;
            var5 = var1.type;
            var4['type'] = var5;
            var5 = var1.user;
            var4['user'] = var5;
            var5 = var1.since;
            var4['since'] = var5;
            var5 = var1.nickname;
            var4['nickname'] = var5;
            var5 = var1.is_spam_request;
            if(var5) { _fun0046_ip = 125; continue _fun0046 }
case 36:
            var5 = false;
case 125:
            var4['isSpamRequest'] = var5;
            var5 = var1.is_stranger_request;
            if(var5) { _fun0046_ip = 167; continue _fun0046 }
case 11:
            var5 = false;
case 167:
            var4['isStrangerRequest'] = var5;
            var5 = var1.user_ignored;
            if(var5) { _fun0046_ip = 171; continue _fun0046 }
case 172:
            var5 = false;
case 171:
            var4['userIgnored'] = var5;
            var5 = var1.origin_application_id;
            var4['originApplicationId'] = var5;
            var2['relationship'] = var4;
            var4 = var1.should_notify;
            var1 = true;
            var1 = var1 === var4;
            var2['shouldNotify'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['RELATIONSHIP_REMOVE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'RELATIONSHIP_REMOVE';
        var2['type'] = var1;
        var1 = arg1;
        var2['relationship'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['RELATIONSHIP_UPDATE'];
    var4 = function(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot26;
            var2 = {};
            var1 = 'RELATIONSHIP_UPDATE';
            var2['type'] = var1;
            var1 = {};
            var5 = var4.id;
            var1['id'] = var5;
            var5 = var4.type;
            var1['type'] = var5;
            var5 = var4.user;
            var1['user'] = var5;
            var5 = var4.nickname;
            var1['nickname'] = var5;
            var5 = var4.since;
            var1['since'] = var5;
            var5 = var4.is_spam_request;
            if(var5) { _fun0047_ip = 125; continue _fun0047 }
case 36:
            var5 = false;
case 125:
            var1['isSpamRequest'] = var5;
            var5 = var4.is_stranger_request;
            if(var5) { _fun0047_ip = 167; continue _fun0047 }
case 11:
            var5 = false;
case 167:
            var1['isStrangerRequest'] = var5;
            var5 = var4.user_ignored;
            if(var5) { _fun0047_ip = 171; continue _fun0047 }
case 172:
            var5 = false;
case 171:
            var1['userIgnored'] = var5;
            var4 = var4.origin_application_id;
            var1['originApplicationId'] = var4;
            var2['relationship'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GAME_RELATIONSHIP_ADD'];
    var4 = function(arg1) {
        var4 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GAME_RELATIONSHIP_ADD';
        var2['type'] = var1;
        var1 = {};
        var5 = var4.id;
        var1['id'] = var5;
        var5 = var4.application_id;
        var1['applicationId'] = var5;
        var5 = var4.type;
        var1['type'] = var5;
        var5 = var4.since;
        var1['since'] = var5;
        var5 = var4.dm_access_type;
        var1['dmAccessType'] = var5;
        var4 = var4.user;
        var1['user'] = var4;
        var2['gameRelationship'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GAME_RELATIONSHIP_REMOVE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GAME_RELATIONSHIP_REMOVE';
        var2['type'] = var4;
        var4 = var1.id;
        var2['userId'] = var4;
        var1 = var1.application_id;
        var2['applicationId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['PRESENCE_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot30;
        var2 = {};
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var4 = var1.user;
        var2['user'] = var4;
        var4 = var1.status;
        var2['status'] = var4;
        var4 = var1.activities;
        var2['activities'] = var4;
        var4 = var1.hidden_activities;
        var2['hiddenActivities'] = var4;
        var4 = var1.client_status;
        var2['clientStatus'] = var4;
        var1 = var1.processed_at_timestamp;
        var2['processedAtTimestamp'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['PRESENCES_REPLACE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'PRESENCES_REPLACE';
        var2['type'] = var1;
        var1 = arg1;
        var2['presences'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['SESSIONS_REPLACE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'SESSIONS_REPLACE';
        var2['type'] = var4;
        var5 = _closure1_slot29;
        var1 = undefined;
        var4 = arg1;
        var4 = var5.bind(var1)(var4);
        var2['sessions'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['VOICE_STATE_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot25;
        var2 = new Array(1);
        var1 = arg1;
        var2[0] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['VOICE_STATE_UPDATE_BATCH'];
    var4 = function(arg1) {
        var3 = _closure1_slot25;
        var1 = arg1;
        var2 = var1.voice_states;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['VOICE_SERVER_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'VOICE_SERVER_UPDATE';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var4 = var1.endpoint;
        var2['endpoint'] = var4;
        var1 = var1.token;
        var2['token'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['CALL_CREATE'];
    var4 = function(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot26;
            var4 = {};
            var1 = 'CALL_CREATE';
            var4['type'] = var1;
            var1 = var3.channel_id;
            var4['channelId'] = var1;
            var1 = var3.message_id;
            var4['messageId'] = var1;
            var1 = var3.region;
            var4['region'] = var1;
            var1 = var3.ringing;
            var4['ringing'] = var1;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var6 = var3.voice_states;
            var3 = null;
            if(!(var3 != var6)) { _fun0048_ip = 173; continue _fun0048 }
case 36:
            var3 = _closure1_slot26;
            var2 = {};
            var4 = 'VOICE_STATE_UPDATES';
            var2['type'] = var4;
            var5 = var6.map;
            var4 = function(arg1) {
                _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                    var3 = arg1;
                    var1 = {};
                    var2 = var3.user_id;
                    var1['userId'] = var2;
                    var2 = null;
                    var1['guildId'] = var2;
                    var4 = var3.session_id;
                    var1['sessionId'] = var4;
                    var4 = var3.channel_id;
                    var1['channelId'] = var4;
                    var4 = var3.mute;
                    var1['mute'] = var4;
                    var4 = var3.deaf;
                    var1['deaf'] = var4;
                    var4 = var3.self_mute;
                    var1['selfMute'] = var4;
                    var4 = var3.self_deaf;
                    var1['selfDeaf'] = var4;
                    var4 = var3.self_video;
                    if(var4) { _fun0049_ip = 11; continue _fun0049 }
case 174:
                    var4 = false;
case 11:
                    var1['selfVideo'] = var4;
                    var4 = var3.suppress;
                    var1['suppress'] = var4;
                    var4 = var3.self_stream;
                    if(var4) { _fun0049_ip = 173; continue _fun0049 }
case 175:
                    var4 = false;
case 173:
                    var1['selfStream'] = var4;
                    var5 = var3.request_to_speak_timestamp;
                    var6 = var2 != var5;
                    var4 = null;
                    if(!var6) { _fun0049_ip = 50; continue _fun0049 }
case 129:
                    var4 = var5;
case 50:
                    var1['requestToSpeakTimestamp'] = var4;
                    var3 = var3.discoverable;
                    var2 = var2 == var3;
                    if(var2) { _fun0049_ip = 131; continue _fun0049 }
case 176:
                    var2 = var3;
case 131:
                    var1['discoverable'] = var2;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var2['voiceStates'] = var4;
            var2 = var3.bind(var1)(var2);
case 173:
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['CALL_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'CALL_UPDATE';
        var2['type'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var4 = var1.message_id;
        var2['messageId'] = var4;
        var4 = var1.region;
        var2['region'] = var4;
        var1 = var1.ringing;
        var2['ringing'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['CALL_DELETE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'CALL_DELETE';
        var2['type'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var1 = var1.unavailable;
        var2['unavailable'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['OAUTH2_TOKEN_CREATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'OAUTH2_TOKEN_CREATE';
        var2['type'] = var4;
        var4 = var1.id;
        var2['id'] = var4;
        var4 = var1.scopes;
        var2['scopes'] = var4;
        var1 = var1.application;
        var2['application'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['OAUTH2_TOKEN_DELETE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'OAUTH2_TOKEN_DELETE';
        var2['type'] = var4;
        var4 = var1.id;
        var2['id'] = var4;
        var1 = var1.application_id;
        var2['applicationId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['OAUTH2_TOKEN_REVOKE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'OAUTH2_TOKEN_REVOKE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.access_token;
        var2['accessToken'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['RECENT_MENTION_DELETE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'RECENT_MENTION_DELETE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.message_id;
        var2['id'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['SAVED_MESSAGE_CREATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'SAVED_MESSAGE_CREATE';
        var2['type'] = var4;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var1 = 24;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.savedMessageCreateObjectToClient;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var2['savedMessage'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['SAVED_MESSAGE_DELETE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'SAVED_MESSAGE_DELETE';
        var2['type'] = var4;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var1 = 24;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.savedMessageDeleteObjectToClient;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var2['savedMessageData'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['FRIEND_SUGGESTION_CREATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'FRIEND_SUGGESTION_CREATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['suggestion'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['FRIEND_SUGGESTION_DELETE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'FRIEND_SUGGESTION_DELETE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.suggested_user_id;
        var2['suggestedUserId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['WEBHOOKS_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'WEBHOOKS_UPDATE';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.channel_id;
        var2['channelId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'];
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = arg2;
        var2['type'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var4 = var1.message_id;
        var2['messageId'] = var4;
        var4 = var1.user_id;
        var2['userId'] = var4;
        var4 = var1.emoji;
        var2['emoji'] = var4;
        var4 = var1.burst_colors;
        var2['colors'] = var4;
        var4 = var1.type;
        var2['reactionType'] = var4;
        var1 = var1.message_author_id;
        var2['messageAuthorId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['MESSAGE_POLL_VOTE_ADD', 'MESSAGE_POLL_VOTE_REMOVE'];
    var4 = function(arg1, arg2) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot26;
            var2 = {};
            var4 = 'MESSAGE_REACTION_REMOVE';
            var7 = 'MESSAGE_POLL_VOTE_ADD';
            var6 = arg2;
            if(!(var7 === var6)) { _fun0050_ip = 33; continue _fun0050 }
case 157:
            var4 = 'MESSAGE_REACTION_ADD';
case 33:
            var2['type'] = var4;
            var4 = var5.channel_id;
            var2['channelId'] = var4;
            var4 = var5.message_id;
            var2['messageId'] = var4;
            var4 = var5.user_id;
            var2['userId'] = var4;
            var4 = {};
            var5 = var5.answer_id;
            var4['id'] = var5;
            var5 = '';
            var4['name'] = var5;
            var2['emoji'] = var4;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 25;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var4 = var4.ReactionTypes;
            var4 = var4.VOTE;
            var2['reactionType'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['MESSAGE_POLL_VOTE_ADD_MANY'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'MESSAGE_REACTION_ADD_MANY';
        var2['type'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var4 = var1.message_id;
        var2['messageId'] = var4;
        var5 = var1.votes;
        var4 = var5.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var3 = copyDataProperties(var6, var5);
            var3 = {};
            var2 = var2.answer_id;
            var3['id'] = var2;
            var2 = '';
            var3['name'] = var2;
            var2 = 'emoji';
            var1[var2] = var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 25;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ReactionTypes;
            var3 = var2.VOTE;
            var2 = 'reactionType';
            var1[var2] = var3;
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var2['reactions'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['MESSAGE_REACTION_REMOVE_ALL'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'MESSAGE_REACTION_REMOVE_ALL';
        var2['type'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var1 = var1.message_id;
        var2['messageId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['MESSAGE_REACTION_REMOVE_EMOJI'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'MESSAGE_REACTION_REMOVE_EMOJI';
        var2['type'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var4 = var1.message_id;
        var2['messageId'] = var4;
        var1 = var1.emoji;
        var2['emoji'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['MESSAGE_REACTION_ADD_MANY'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'MESSAGE_REACTION_ADD_MANY';
        var2['type'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var4 = var1.message_id;
        var2['messageId'] = var4;
        var1 = var1.reactions;
        var2['reactions'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['PAYMENT_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'PAYMENT_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['payment'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['ENTITLEMENT_CREATE', 'ENTITLEMENT_UPDATE', 'ENTITLEMENT_DELETE'];
    var4 = function(arg1, arg2) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = arg2;
        var2['type'] = var1;
        var1 = arg1;
        var2['entitlement'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_PAYMENT_SOURCES_UPDATE'];
    var4 = function() {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var3 = _closure1_slot12;
            var2 = var3.hasLayers;
            var2 = var2.bind(var3)();
            if(!var2) { _fun0051_ip = 177; continue _fun0051 }
case 29:
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 26;
            var2 = var5[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.fetchPaymentSources;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot2;
            var2 = 27;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.fetchSubscriptionPlansBySKUs;
            var4 = _closure1_slot15;
            var1 = var4.getFetchedSKUIDs;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
case 177:
            var1 = undefined;
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_SUBSCRIPTIONS_UPDATE'];
    var4 = function() {
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
            var4 = _closure1_slot2;
            var3 = _closure1_slot3;
            var1 = 28;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.fetchCurrentUser;
            var3 = var3.bind(var4)();
            var4 = _closure1_slot12;
            var3 = var4.hasLayers;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0052_ip = 125; continue _fun0052 }
case 178:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 26;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchSubscriptions;
            var2 = var2.bind(var3)();
case 125:
            return var1;
        }
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE'];
    var4 = function(arg1) {
        var6 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_BOOST_SLOT_CREATE';
        var2['type'] = var4;
        var5 = _closure1_slot7;
        var4 = var5.createFromServer;
        var8 = _closure1_slot16;
        var7 = var8.getSubscriptionById;
        var1 = var6.subscription_id;
        var1 = var7.bind(var8)(var1);
        var1 = var4.bind(var5)(var6, var1);
        var2['guildBoostSlot'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE'];
    var4 = function(arg1) {
        var6 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_BOOST_SLOT_UPDATE';
        var2['type'] = var4;
        var5 = _closure1_slot7;
        var4 = var5.createFromServer;
        var8 = _closure1_slot16;
        var7 = var8.getSubscriptionById;
        var1 = var6.subscription_id;
        var1 = var7.bind(var8)(var1);
        var1 = var4.bind(var5)(var6, var1);
        var2['guildBoostSlot'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['BILLING_POPUP_BRIDGE_CALLBACK'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'BILLING_POPUP_BRIDGE_CALLBACK';
        var2['type'] = var4;
        var4 = var1.payment_source_type;
        var2['paymentSourceType'] = var4;
        var4 = var1.state;
        var2['state'] = var4;
        var4 = var1.path;
        var2['path'] = var4;
        var1 = var1.query;
        var2['query'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_PAYMENT_BROWSER_CHECKOUT_DONE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'USER_PAYMENT_BROWSER_CHECKOUT_DONE';
        var2['type'] = var4;
        var4 = var1.load_id;
        var2['loadId'] = var4;
        var4 = var1.sku_id;
        var2['skuId'] = var4;
        var1 = var1.sku_subscription_plan_id;
        var2['skuSubscriptionPlanId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_PAYMENT_CLIENT_ADD'];
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 29;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.getPurchaseTokenHash;
        var4 = var3.bind(var4)();
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                var2 = _closure2_slot0;
                var4 = var2.purchase_token_hash;
                var2 = arg1;
                if(!(var4 === var2)) { _fun0053_ip = 35; continue _fun0053 }
case 144:
                var3 = _closure1_slot26;
                var2 = {};
                var5 = 'USER_PAYMENT_CLIENT_ADD';
                var2['type'] = var5;
                var2['purchaseTokenHash'] = var4;
                var1 = _closure2_slot0;
                var1 = var1.expires_at;
                var2['expiresAt'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 35:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_MEMBER_LIST_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 15;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var4 = var3.Emitter;
        var3 = var4.batched;
        var2 = function() {
            var2 = function handleItem(arg1) {
                _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.member;
                    var6 = null;
                    if(!(var6 != var2)) { _fun0054_ip = 51; continue _fun0054 }
case 107:
                    var2 = var1.member;
                    var8 = _closure1_slot27;
                    var3 = _closure2_slot0;
                    var7 = var3.guild_id;
                    var4 = var2.user;
                    var3 = undefined;
                    var4 = var8.bind(var3)(var7, var4, var2);
                    var4 = var2.presence;
                    if(!(var6 != var4)) { _fun0054_ip = 51; continue _fun0054 }
case 30:
                    var4 = var2.presence;
                    var2 = _closure1_slot30;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var5 = var5.guild_id;
                    var1['guildId'] = var5;
                    var5 = var4.user;
                    var1['user'] = var5;
                    var5 = var4.status;
                    var1['status'] = var5;
                    var5 = var4.activities;
                    var1['activities'] = var5;
                    var5 = var4.hidden_activities;
                    var1['hiddenActivities'] = var5;
                    var5 = var4.client_status;
                    var1['clientStatus'] = var5;
                    var4 = var4.processed_at_timestamp;
                    var1['processedAtTimestamp'] = var4;
                    var1 = var2.bind(var3)(var1);
case 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure3_slot0 = var2;
            var4 = _closure2_slot0;
            var3 = var4.ops;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.op;
                    var3 = var1.items;
                    var4 = var1.item;
                    var1 = 'SYNC';
                    if(!(var1 !== var2)) { _fun0055_ip = 158; continue _fun0055 }
case 179:
                    var1 = 'UPDATE';
                    if(!(var1 !== var2)) { _fun0055_ip = 180; continue _fun0055 }
case 39:
                    var1 = 'INSERT';
                    if(!(var1 === var2)) { _fun0055_ip = 101; continue _fun0055 }
case 180:
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var4);
                    _fun0055_ip = 101; continue _fun0055;
case 158:
                    var2 = var3.forEach;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
case 101:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.flush;
            var3 = var3.bind(var5)();
            var3 = _closure1_slot26;
            var2 = {};
            var5 = 'GUILD_MEMBER_LIST_UPDATE';
            var2['type'] = var5;
            var5 = var4.guild_id;
            var2['guildId'] = var5;
            var5 = var4.id;
            var2['id'] = var5;
            var5 = var4.ops;
            var2['ops'] = var5;
            var5 = var4.groups;
            var2['groups'] = var5;
            var5 = var4.member_count;
            var2['memberCount'] = var5;
            var4 = var4.online_count;
            var2['onlineCount'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GIFT_CODE_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GIFT_CODE_UPDATE';
        var2['type'] = var4;
        var4 = var1.uses;
        var2['uses'] = var4;
        var1 = var1.code;
        var2['code'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GIFT_CODE_CREATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GIFT_CODE_CREATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['giftCode'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['LIBRARY_APPLICATION_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'LIBRARY_APPLICATION_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['libraryApplication'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['STREAM_CREATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'STREAM_CREATE';
        var2['type'] = var4;
        var4 = var1.stream_key;
        var2['streamKey'] = var4;
        var4 = var1.region;
        var2['region'] = var4;
        var4 = var1.viewer_ids;
        var2['viewerIds'] = var4;
        var4 = var1.rtc_server_id;
        var2['rtcServerId'] = var4;
        var4 = var1.rtc_channel_id;
        var2['rtcChannelId'] = var4;
        var1 = var1.paused;
        var2['paused'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['STREAM_SERVER_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'STREAM_SERVER_UPDATE';
        var2['type'] = var4;
        var4 = var1.stream_key;
        var2['streamKey'] = var4;
        var4 = var1.endpoint;
        var2['endpoint'] = var4;
        var1 = var1.token;
        var2['token'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['STREAM_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'STREAM_UPDATE';
        var2['type'] = var4;
        var4 = var1.stream_key;
        var2['streamKey'] = var4;
        var4 = var1.region;
        var2['region'] = var4;
        var4 = var1.viewer_ids;
        var2['viewerIds'] = var4;
        var1 = var1.paused;
        var2['paused'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['STREAM_DELETE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'STREAM_DELETE';
        var2['type'] = var4;
        var4 = var1.stream_key;
        var2['streamKey'] = var4;
        var4 = var1.unavailable;
        var2['unavailable'] = var4;
        var1 = var1.reason;
        var2['reason'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GENERIC_PUSH_NOTIFICATION_SENT'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GENERIC_PUSH_NOTIFICATION_SENT';
        var2['type'] = var4;
        var4 = var1.title;
        var2['title'] = var4;
        var4 = var1.body;
        var2['body'] = var4;
        var4 = var1.tracking_type;
        var2['trackingType'] = var4;
        var4 = var1.icon;
        var2['icon'] = var4;
        var4 = var1.route;
        var2['route'] = var4;
        var1 = var1.tag;
        var2['tag'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['REACTION_NOTIFICATION_SENT'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'REACTION_NOTIFICATION_SENT';
        var2['type'] = var4;
        var4 = var1.route;
        var2['route'] = var4;
        var4 = var1.message;
        var2['message'] = var4;
        var4 = var1.emoji;
        var2['emoji'] = var4;
        var4 = var1.reactor_user_id;
        var2['reactorUserId'] = var4;
        var4 = var1.title;
        var2['title'] = var4;
        var4 = var1.body;
        var2['body'] = var4;
        var4 = var1.tracking_type;
        var2['trackingType'] = var4;
        var1 = var1.icon;
        var2['icon'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['NOTIFICATION_CENTER_ITEM_CREATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'NOTIFICATION_CENTER_ITEM_CREATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['item'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['NOTIFICATION_CENTER_ITEM_DELETE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'NOTIFICATION_CENTER_ITEM_DELETE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.id;
        var2['id'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['NOTIFICATION_CENTER_ITEMS_ACK'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {'type': 'NOTIFICATION_CENTER_ITEMS_ACK', 'ids': null, 'optimistic': false};
        var1 = arg1;
        var4 = var1.id;
        var1 = new Array(1);
        var1[0] = var4;
        var2['ids'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['NOTIFICATION_CENTER_ITEM_COMPLETED'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'NOTIFICATION_CENTER_ITEM_COMPLETED';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.item_enum;
        var2['item_enum'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['QUESTS_USER_STATUS_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'QUESTS_USER_STATUS_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.user_status;
        var2['user_status'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['QUESTS_USER_COMPLETION_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'QUESTS_USER_COMPLETION_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.quest_enrollment_blocked_until;
        var2['quest_enrollment_blocked_until'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['QUEST_PREVIEW_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'QUEST_PREVIEW_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.quest_id;
        var2['quest_id'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['APPLICATION_COMMAND_PERMISSIONS_UPDATE'];
    var4 = function(arg1, arg2) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = arg2;
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.guild_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_APPLICATION_COMMAND_INDEX_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_APPLICATION_COMMAND_INDEX_UPDATE';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.version;
        var2['version'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_JOIN_REQUEST_CREATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_JOIN_REQUEST_CREATE';
        var2['type'] = var4;
        var4 = var1.request;
        var2['request'] = var4;
        var4 = var1.status;
        var2['status'] = var4;
        var1 = var1.guild_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_JOIN_REQUEST_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_JOIN_REQUEST_UPDATE';
        var2['type'] = var4;
        var4 = var1.request;
        var2['request'] = var4;
        var4 = var1.status;
        var2['status'] = var4;
        var1 = var1.guild_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_JOIN_REQUEST_DELETE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_JOIN_REQUEST_DELETE';
        var2['type'] = var4;
        var4 = var1.id;
        var2['id'] = var4;
        var4 = var1.user_id;
        var2['userId'] = var4;
        var1 = var1.guild_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['INTERACTION_CREATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'INTERACTION_CREATE';
        var2['type'] = var4;
        var4 = var1.id;
        var2['interactionId'] = var4;
        var1 = var1.nonce;
        var2['nonce'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['INTERACTION_SUCCESS'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'INTERACTION_SUCCESS';
        var2['type'] = var4;
        var4 = var1.id;
        var2['interactionId'] = var4;
        var1 = var1.nonce;
        var2['nonce'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['INTERACTION_FAILURE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'INTERACTION_FAILURE';
        var2['type'] = var4;
        var4 = var1.nonce;
        var2['nonce'] = var4;
        var1 = var1.reason_code;
        var2['reasonCode'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE';
        var2['type'] = var4;
        var4 = var1.choices;
        var2['choices'] = var4;
        var1 = var1.nonce;
        var2['nonce'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['INTERACTION_MODAL_CREATE'];
    var4 = function(arg1) {
        var4 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var5 = 'INTERACTION_MODAL_CREATE';
        var2['type'] = var5;
        var5 = var4.id;
        var2['id'] = var5;
        var5 = var4.channel_id;
        var2['channelId'] = var5;
        var5 = var4.custom_id;
        var2['customId'] = var5;
        var5 = var4.application;
        var2['application'] = var5;
        var5 = var4.title;
        var2['title'] = var5;
        var6 = _closure1_slot0;
        var5 = _closure1_slot3;
        var1 = 30;
        var5 = var5[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var5);
        var6 = var7.transformComponents;
        var5 = var4.components;
        var5 = var6.bind(var7)(var5);
        var2['components'] = var5;
        var5 = var4.nonce;
        var2['nonce'] = var5;
        var4 = var4.resolved;
        var2['resolved'] = var4;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['INTERACTION_IFRAME_MODAL_CREATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'INTERACTION_IFRAME_MODAL_CREATE';
        var2['type'] = var4;
        var4 = var1.id;
        var2['id'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var4 = var1.custom_id;
        var2['customId'] = var4;
        var4 = var1.application;
        var2['application'] = var4;
        var4 = var1.title;
        var2['title'] = var4;
        var4 = var1.iframe_path;
        var2['iframePath'] = var4;
        var4 = var1.modal_size;
        var2['modalSize'] = var4;
        var1 = var1.nonce;
        var2['nonce'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['STAGE_INSTANCE_CREATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'STAGE_INSTANCE_CREATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['instance'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['STAGE_INSTANCE_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'STAGE_INSTANCE_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['instance'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['STAGE_INSTANCE_DELETE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'STAGE_INSTANCE_DELETE';
        var2['type'] = var1;
        var1 = arg1;
        var2['instance'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SCHEDULED_EVENT_CREATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GUILD_SCHEDULED_EVENT_CREATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['guildScheduledEvent'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SCHEDULED_EVENT_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GUILD_SCHEDULED_EVENT_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['guildScheduledEvent'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SCHEDULED_EVENT_DELETE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GUILD_SCHEDULED_EVENT_DELETE';
        var2['type'] = var1;
        var1 = arg1;
        var2['guildScheduledEvent'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['eventException'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['eventException'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE';
        var2['type'] = var1;
        var1 = arg1;
        var2['eventException'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.event_id;
        var2['eventId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SCHEDULED_EVENT_USER_ADD'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_SCHEDULED_EVENT_USER_ADD';
        var2['type'] = var4;
        var4 = var1.user_id;
        var2['userId'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var4 = var1.guild_scheduled_event_id;
        var2['guildEventId'] = var4;
        var4 = var1.guild_scheduled_event_exception_id;
        var2['guildEventExceptionId'] = var4;
        var1 = var1.response;
        var2['response'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SCHEDULED_EVENT_USER_REMOVE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_SCHEDULED_EVENT_USER_REMOVE';
        var2['type'] = var4;
        var4 = var1.user_id;
        var2['userId'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var4 = var1.guild_scheduled_event_id;
        var2['guildEventId'] = var4;
        var4 = var1.guild_scheduled_event_exception_id;
        var2['guildEventExceptionId'] = var4;
        var1 = var1.response;
        var2['response'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_DIRECTORY_ENTRY_CREATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_DIRECTORY_ENTRY_CREATE';
        var2['type'] = var4;
        var4 = var1.directory_channel_id;
        var2['channelId'] = var4;
        var2['entry'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_DIRECTORY_ENTRY_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_DIRECTORY_ENTRY_UPDATE';
        var2['type'] = var4;
        var4 = var1.directory_channel_id;
        var2['channelId'] = var4;
        var2['entry'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_DIRECTORY_ENTRY_DELETE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_DIRECTORY_ENTRY_DELETE';
        var2['type'] = var4;
        var4 = var1.directory_channel_id;
        var2['channelId'] = var4;
        var1 = var1.entity_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['AUTO_MODERATION_MENTION_RAID_DETECTION'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'AUTO_MODERATION_MENTION_RAID_DETECTION';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var4 = var1.decision_id;
        var2['decisionId'] = var4;
        var1 = var1.suspicious_mention_activity_until;
        var2['suspiciousMentionActivityUntil'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['VOICE_CHANNEL_EFFECT_SEND'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'VOICE_CHANNEL_EFFECT_SEND';
        var2['type'] = var4;
        var4 = var1.emoji;
        var2['emoji'] = var4;
        var4 = var1.channel_id;
        var2['channelId'] = var4;
        var4 = var1.user_id;
        var2['userId'] = var4;
        var4 = var1.animation_type;
        var2['animationType'] = var4;
        var4 = var1.animation_id;
        var2['animationId'] = var4;
        var4 = var1.sound_id;
        var2['soundId'] = var4;
        var4 = var1.sound_volume;
        var2['soundVolume'] = var4;
        var4 = var1.points;
        var2['points'] = var4;
        var4 = var1.streamer_id;
        var2['streamerId'] = var4;
        var4 = var1.line_id;
        var2['lineId'] = var4;
        var1 = var1.emoji_hose;
        var2['emojiHose'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SOUNDBOARD_SOUND_CREATE'];
    var4 = function(arg1) {
        var4 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GUILD_SOUNDBOARD_SOUND_CREATE';
        var2['type'] = var1;
        var1 = {};
        var6 = var4.guild_id;
        var1['guildId'] = var6;
        var6 = var4.name;
        var1['name'] = var6;
        var6 = var4.sound_id;
        var1['soundId'] = var6;
        var7 = _closure1_slot8;
        var8 = var4.user;
        var6 = var7.prototype;
        var6 = Object.create(var6, {constructor: {value: var7}});
        var9 = var6;
        var5 = new var9[var7](var8, var7);
        var5 = var5 instanceof Object ? var5 : var6;
        var1['user'] = var5;
        var5 = var4.user_id;
        var1['userId'] = var5;
        var5 = var4.volume;
        var1['volume'] = var5;
        var5 = var4.emoji_id;
        var1['emojiId'] = var5;
        var5 = var4.emoji_name;
        var1['emojiName'] = var5;
        var4 = var4.available;
        var1['available'] = var4;
        var2['sound'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SOUNDBOARD_SOUND_UPDATE'];
    var4 = function(arg1) {
        var4 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GUILD_SOUNDBOARD_SOUND_UPDATE';
        var2['type'] = var1;
        var1 = {};
        var6 = var4.guild_id;
        var1['guildId'] = var6;
        var6 = var4.name;
        var1['name'] = var6;
        var6 = var4.sound_id;
        var1['soundId'] = var6;
        var7 = _closure1_slot8;
        var8 = var4.user;
        var6 = var7.prototype;
        var6 = Object.create(var6, {constructor: {value: var7}});
        var9 = var6;
        var5 = new var9[var7](var8, var7);
        var5 = var5 instanceof Object ? var5 : var6;
        var1['user'] = var5;
        var5 = var4.user_id;
        var1['userId'] = var5;
        var5 = var4.volume;
        var1['volume'] = var5;
        var5 = var4.emoji_id;
        var1['emojiId'] = var5;
        var5 = var4.emoji_name;
        var1['emojiName'] = var5;
        var4 = var4.available;
        var1['available'] = var4;
        var2['sound'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SOUNDBOARD_SOUND_DELETE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_SOUNDBOARD_SOUND_DELETE';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.sound_id;
        var2['soundId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_SOUNDBOARD_SOUNDS_UPDATE'];
    var4 = function(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot26;
        var2 = {};
        var5 = 'GUILD_SOUNDBOARD_SOUNDS_UPDATE';
        var2['type'] = var5;
        var5 = var4.guild_id;
        var2['guildId'] = var5;
        var5 = var4.soundboard_sounds;
        var4 = var5.map;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.name;
            var1['name'] = var3;
            var3 = var2.sound_id;
            var1['soundId'] = var3;
            var3 = var2.emoji_name;
            var1['emojiName'] = var3;
            var3 = var2.emoji_id;
            var1['emojiId'] = var3;
            var3 = var2.user_id;
            var1['userId'] = var3;
            var3 = var2.volume;
            var1['volume'] = var3;
            var2 = var2.available;
            var1['available'] = var2;
            var2 = _closure2_slot0;
            var2 = var2.guild_id;
            var1['guildId'] = var2;
            return var1;
        };
        var1 = var4.bind(var5)(var1);
        var2['soundboardSounds'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var9 = ['EMBEDDED_ACTIVITY_UPDATE_V2'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'EMBEDDED_ACTIVITY_UPDATE_V2';
        var2['type'] = var4;
        var4 = var1.application_id;
        var2['applicationId'] = var4;
        var4 = var1.launch_id;
        var2['launchId'] = var4;
        var4 = var1.composite_instance_id;
        var2['compositeInstanceId'] = var4;
        var4 = var1.location;
        var2['location'] = var4;
        var1 = var1.participants;
        var2['participants'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var7 = ['AUTH_SESSION_CHANGE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'AUTH_SESSION_CHANGE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.auth_session_id_hash;
        var2['authSessionIdHash'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_CONNECTIONS_LINK_CALLBACK'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'USER_CONNECTIONS_LINK_CALLBACK';
        var2['type'] = var4;
        var4 = var1.provider;
        var2['provider'] = var4;
        var4 = var1.callback_code;
        var2['callbackCode'] = var4;
        var1 = var1.callback_state;
        var2['callbackState'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_CONNECTIONS_CALLBACK'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'USER_CONNECTIONS_CALLBACK';
        var2['type'] = var4;
        var4 = var1.provider;
        var2['provider'] = var4;
        var4 = var1.code;
        var2['code'] = var4;
        var4 = var1.state;
        var2['state'] = var4;
        var1 = var1.openid_params;
        var2['openid_params'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['DELETED_ENTITY_IDS'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'DELETED_ENTITY_IDS';
        var2['type'] = var1;
        var4 = arg1;
        var5 = var2;
        var1 = copyDataProperties(var5, var4);
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var9 = ['CHANNEL_SYNC'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        var1 = arg1;
        var4 = var1.channels;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var3 = _closure1_slot18;
            var2 = var3.add;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'CHANNEL_SYNC';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guild_id'] = var4;
        var4 = var1.channels;
        var2['channels'] = var4;
        var1 = var1.integrity_check;
        var2['integrity_check'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var7 = ['CONSOLE_COMMAND_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'CONSOLE_COMMAND_UPDATE';
        var2['type'] = var4;
        var4 = var1.id;
        var2['id'] = var4;
        var4 = var1.result;
        var2['result'] = var4;
        var1 = var1.error;
        var2['error'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var9 = ['PASSIVE_UPDATE_V2'];
    var7 = function(arg1) {
        var3 = _closure1_slot10;
        var2 = var3.loadGuildIds;
        var1 = arg1;
        var4 = var1.guild_id;
        var1 = new Array(1);
        var1[0] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var5 = 'PASSIVE_UPDATE_V2';
        var2['type'] = var5;
        var5 = var1.guild_id;
        var2['guildId'] = var5;
        var5 = var1.updated_members;
        var2['members'] = var5;
        var7 = var1.updated_channels;
        var6 = var7.map;
        var5 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.last_message_id;
            var1['lastMessageId'] = var3;
            var2 = var2.last_pin_timestamp;
            var1['lastPinTimestamp'] = var2;
            return var1;
        };
        var5 = var6.bind(var7)(var5);
        var2['channels'] = var5;
        var6 = var1.updated_voice_states;
        var5 = var6.map;
        var4 = function(arg1) {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                var3 = arg1;
                var1 = {};
                var2 = var3.channel_id;
                var1['channelId'] = var2;
                var2 = var3.deaf;
                if(var2) { _fun0056_ip = 143; continue _fun0056 }
case 31:
                var2 = false;
case 143:
                var1['deaf'] = var2;
                var2 = var3.mute;
                if(var2) { _fun0056_ip = 90; continue _fun0056 }
case 155:
                var2 = false;
case 90:
                var1['mute'] = var2;
                var5 = var3.request_to_speak_timestamp;
                var2 = null;
                var6 = var2 != var5;
                var4 = null;
                if(!var6) { _fun0056_ip = 181; continue _fun0056 }
case 182:
                var4 = var5;
case 181:
                var1['requestToSpeakTimestamp'] = var4;
                var4 = var3.self_deaf;
                if(var4) { _fun0056_ip = 125; continue _fun0056 }
case 36:
                var4 = false;
case 125:
                var1['selfDeaf'] = var4;
                var4 = var3.self_mute;
                if(var4) { _fun0056_ip = 167; continue _fun0056 }
case 11:
                var4 = false;
case 167:
                var1['selfMute'] = var4;
                var4 = var3.self_stream;
                if(var4) { _fun0056_ip = 171; continue _fun0056 }
case 172:
                var4 = false;
case 171:
                var1['selfStream'] = var4;
                var4 = var3.self_video;
                if(var4) { _fun0056_ip = 162; continue _fun0056 }
case 183:
                var4 = false;
case 162:
                var1['selfVideo'] = var4;
                var4 = var3.session_id;
                var1['sessionId'] = var4;
                var4 = var3.suppress;
                var1['suppress'] = var4;
                var4 = var3.user_id;
                var1['userId'] = var4;
                var3 = var3.discoverable;
                var2 = var2 == var3;
                if(var2) { _fun0056_ip = 184; continue _fun0056 }
case 185:
                var2 = var3;
case 184:
                var1['discoverable'] = var2;
                return var1;
            }
        };
        var4 = var5.bind(var6)(var4);
        var2['voiceStates'] = var4;
        var1 = var1.removed_voice_states;
        var2['removedVoiceStateUsers'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var10.bind(var1)(var9, var7, var4);
    var7 = ['CREATOR_MONETIZATION_RESTRICTIONS_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.restrictions;
        var2['restrictions'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['BILLING_REFERRAL_TRIAL_OFFER_UPDATE'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'BILLING_REFERRAL_TRIAL_OFFER_UPDATE';
        var2['type'] = var4;
        var4 = var1.user_trial_offer_id;
        var2['userTrialOfferId'] = var4;
        var1 = var1.recipient_id;
        var2['recipientId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['LAST_MESSAGES'];
    var4 = function(arg1) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = 'MESSAGE_PREVIEWS_LOADED';
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.messages;
        var2['messages'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['AUTHENTICATOR_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'AUTHENTICATOR_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['credential'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['AUTHENTICATOR_CREATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'AUTHENTICATOR_CREATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['credential'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['AUTHENTICATOR_DELETE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'AUTHENTICATOR_DELETE';
        var2['type'] = var1;
        var1 = arg1;
        var2['credential'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['NOTIFICATION_SETTINGS_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'NOTIFICATION_SETTINGS_UPDATE';
        var2['type'] = var1;
        var1 = {};
        var4 = arg1;
        var4 = var4.flags;
        var1['flags'] = var4;
        var2['settings'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GAME_INVITE_CREATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GAME_INVITE_CREATE';
        var2['type'] = var1;
        var1 = arg1;
        var2['gameInvite'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GAME_INVITE_DELETE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GAME_INVITE_DELETE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.invite_id;
        var2['inviteId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GAME_INVITE_DELETE_MANY'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'GAME_INVITE_DELETE_MANY';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.invite_ids;
        var2['inviteIds'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['CONVERSATION_SUMMARY_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'CONVERSATION_SUMMARY_UPDATE';
        var2['type'] = var1;
        var4 = arg1;
        var5 = var2;
        var1 = copyDataProperties(var5, var4);
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['PREMIUM_MARKETING_PREVIEW'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'PREMIUM_MARKETING_PREVIEW';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.properties;
        var2['properties'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_APPLICATION_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'USER_APPLICATION_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.application_id;
        var2['applicationId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_APPLICATION_REMOVE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'USER_APPLICATION_REMOVE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.application_id;
        var2['applicationId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['DM_SETTINGS_UPSELL_SHOW'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'DM_SETTINGS_UPSELL_SHOW';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.guild_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['CONTENT_INVENTORY_INBOX_STALE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'CONTENT_INVENTORY_INBOX_STALE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.refresh_after_ms;
        var2['refreshAfterMs'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['VIRTUAL_CURRENCY_BALANCE_UPDATE'];
    var4 = function(arg1) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = 'VIRTUAL_CURRENCY_BALANCE_UPDATE';
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.balance;
        var2['balance'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_POWERUP_ENTITLEMENTS_CREATE', 'GUILD_POWERUP_ENTITLEMENTS_DELETE'];
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = arg2;
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.entitlements;
        var2['entitlements'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GAME_SERVER_CREATE', 'GAME_SERVER_UPDATE'];
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = arg2;
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.game_server;
        var2['gameServer'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GAME_SERVER_DELETE'];
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = arg2;
        var2['type'] = var4;
        var4 = var1.guild_id;
        var2['guildId'] = var4;
        var1 = var1.game_server_id;
        var2['gameServerId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['GUILD_APPLIED_BOOSTS_UPDATE'];
    var4 = function(arg1, arg2) {
        var3 = _closure1_slot26;
        var2 = {};
        var1 = arg2;
        var2['type'] = var1;
        var1 = arg1;
        var1 = var1.guild_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_APPLICATION_IDENTITY_UPDATE'];
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = arg2;
        var2['type'] = var4;
        var4 = var1.user_id;
        var2['user_id'] = var4;
        var4 = var1.application_id;
        var2['application_id'] = var4;
        var4 = var1.username;
        var2['username'] = var4;
        var4 = var1.avatar_hash;
        var2['avatar_hash'] = var4;
        var1 = var1.metadata;
        var2['metadata'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var7 = ['USER_APPLICATION_IDENTITY_REMOVE'];
    var4 = function(arg1, arg2) {
        var1 = arg1;
        var3 = _closure1_slot26;
        var2 = {};
        var4 = arg2;
        var2['type'] = var4;
        var4 = var1.user_id;
        var2['user_id'] = var4;
        var1 = var1.application_id;
        var2['application_id'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4 = var8.bind(var1)(var7, var4);
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/dispatchSocketMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getDispatchHandler(arg1) {
        var2 = _closure1_slot22;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();