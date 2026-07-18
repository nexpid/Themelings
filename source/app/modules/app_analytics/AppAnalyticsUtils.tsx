// app/modules/app_analytics/AppAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var11;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var13;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot31;
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
            var7 = _closure1_slot31;
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
    var _closure1_slot30 = var1;
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
    var _closure1_slot31 = var1;
    var1 = function countKeys(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg1;
            var2 = 0;
            var3 = 1;
            var1 = 0;
            for(var4 in var7)
case 36:
            {
                var1 = var2;
case 3:
                var2 = var2 + var3;
                _fun0004_ip = 36; continue _fun0004;
            }
case 37:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var9 = function collectGuildAnalyticsMetadata(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var12 = arg1;
            var1 = null;
            if(!(var1 != var12)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var4 = _closure1_slot13;
            var2 = var4.getGuild;
            var7 = var2.bind(var4)(var12);
            if(!(var1 != var7)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var5 = _closure1_slot12;
            var4 = var5.getNumRoles;
            var2 = var7.id;
            var4 = var4.bind(var5)(var2);
            var5 = _closure1_slot5;
            var2 = var5.getId;
            var6 = var2.bind(var5)();
            var5 = _closure1_slot11;
            var2 = var5.getMember;
            var6 = var2.bind(var5)(var12, var6);
            var5 = _closure1_slot9;
            var2 = var5.getChannels;
            var5 = var2.bind(var5)(var12);
            var2 = _closure1_slot7;
            var2 = var5[var2];
            var9 = var2.length;
            var2 = _closure1_slot8;
            var2 = var5[var2];
            var8 = var2.length;
            var5 = _closure1_slot24;
            var2 = var5.getVoiceStates;
            var5 = var2.bind(var5)(var12);
            var2 = {};
            var10 = var7.id;
            var2['guild_id'] = var10;
            var11 = _closure1_slot10;
            var10 = var11.getMemberCount;
            var10 = var10.bind(var11)(var12);
            var2['guild_size_total'] = var10;
            var10 = var9 + var8;
            var2['guild_num_channels'] = var10;
            var2['guild_num_text_channels'] = var9;
            var2['guild_num_voice_channels'] = var8;
            var2['guild_num_roles'] = var4;
            var8 = var1 != var6;
            var4 = 0;
            if(!var8) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var8 = var6.roles;
            var4 = var8.length;
case 42:
            var2['guild_member_num_roles'] = var4;
            var4 = global;
            var9 = var4.String;
            var8 = _closure1_slot15;
            var4 = var8.getGuildPermissions;
            var8 = var4.bind(var8)(var7);
            if(!(var1 == var8)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var11 = _closure1_slot2;
            var10 = _closure1_slot3;
            var4 = 21;
            var10 = var10[var4];
            var4 = undefined;
            var4 = var11.bind(var4)(var10);
            var8 = var4.NONE;
case 44:
            var4 = undefined;
            var8 = var9.bind(var4)(var8);
            var2['guild_member_perms'] = var8;
            var9 = var7.features;
            var8 = var9.has;
            var7 = _closure1_slot25;
            var7 = var7.VIP_REGIONS;
            var7 = var8.bind(var9)(var7);
            var2['guild_is_vip'] = var7;
            var6 = var1 != var6;
            var2['is_member'] = var6;
            var3 = _closure1_slot32;
            var3 = var3.bind(var4)(var5);
            var2['num_voice_channels_active'] = var3;
            return var2;
case 40:
            return var1;
case 38:
            return var1;
        }
    };
    var _closure1_slot33 = var9;
    var8 = function collectStaticChannelRouteAnalyticsMetadata(arg1, arg2) {
        var1 = {};
        var2 = arg2;
        var1['channel_static_route'] = var2;
        var2 = false;
        var1['channel_hidden'] = var2;
        return var1;
    };
    var _closure1_slot34 = var8;
    var7 = function collectChannelAnalyticsMetadata(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arg1;
            var8 = function isHidden(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    if(!(var1 != var3)) { _fun0007_ip = 48; continue _fun0007 }
case 29:
                    var3 = var3.permissionOverwrites;
                    var2 = _closure2_slot0;
                    var3 = var3[var2];
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var4 = 22;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.has;
                    var3 = var3.deny;
                    var2 = _closure1_slot27;
                    var2 = var2.VIEW_CHANNEL;
                    var1 = var4.bind(var5)(var3, var2);
case 49:
                    return var1;
case 48:
                    var1 = false;
                    return var1;
case 46:
                    var1 = false;
                    return var1;
                }
            };
            var1 = null;
            if(!(var1 != var7)) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var3 = var7.getGuildId;
            var4 = var3.bind(var7)();
            var _closure2_slot0 = var4;
            var2 = var1 != var4;
            var3 = false;
            if(!var2) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var9 = _closure1_slot4;
            var6 = var9.has;
            var2 = var7.type;
            var2 = var6.bind(var9)(var2);
            if(!var2) { _fun0006_ip = 55; continue _fun0006 }
case 30:
            var2 = var7.parent_id;
            if(!(var1 == var2)) { _fun0006_ip = 9; continue _fun0006 }
case 55:
            var2 = undefined;
            var2 = var8.bind(var2)(var7);
            _fun0006_ip = 56; continue _fun0006;
case 9:
            var9 = _closure1_slot6;
            var6 = var9.getChannel;
            var5 = var7.parent_id;
            var6 = var6.bind(var9)(var5);
            var5 = undefined;
            var2 = var8.bind(var5)(var6);
case 56:
            var3 = var2;
case 53:
            var2 = {};
            var5 = var7.id;
            var2['channel_id'] = var5;
            var5 = var7.type;
            var2['channel_type'] = var5;
            var5 = var7.isPrivate;
            var6 = var5.bind(var7)();
            var5 = 0;
            if(!var6) { _fun0006_ip = 14; continue _fun0006 }
case 57:
            var6 = var7.recipients;
            var5 = var6.length;
case 14:
            var2['channel_size_total'] = var5;
            var5 = global;
            var6 = var5.String;
            if(!(var1 != var4)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var5 = _closure1_slot15;
            var4 = var5.getChannelPermissions;
            var5 = var4.bind(var5)(var7);
            if(!(var1 == var5)) { _fun0006_ip = 60; continue _fun0006 }
case 58:
            var8 = _closure1_slot2;
            var7 = _closure1_slot3;
            var4 = 21;
            var7 = var7[var4];
            var4 = undefined;
            var4 = var8.bind(var4)(var7);
            var5 = var4.NONE;
case 60:
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var2['channel_member_perms'] = var4;
            var2['channel_hidden'] = var3;
            return var2;
case 51:
            return var1;
        }
    };
    var _closure1_slot35 = var7;
    var6 = function trackWithMetadata(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arg1;
            var11 = arguments[1];
            var7 = arguments[2];
            var1 = undefined;
            if(!(var11 === var1)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
            var11 = {};
case 61:
            if(!(var7 === var1)) { _fun0008_ip = 31; continue _fun0008 }
case 63:
            var7 = false;
case 31:
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var4 = 24;
            var3 = var3[var4];
            var5 = var5.bind(var1)(var3);
            var3 = var5.isThrottled;
            var3 = var3.bind(var5)(var6);
            if(var3) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var3 = 'location';
            var5 = var3 in var11;
            var3 = !var5;
            if(!var5) { _fun0008_ip = 11; continue _fun0008 }
case 55:
            var8 = var11.location;
            var5 = _closure1_slot26;
            var5 = var5.GUILD_CREATE_INVITE_SUGGESTION;
            var3 = var8 !== var5;
case 11:
            var5 = 'guild_id';
            var5 = var5 in var11;
            if(var5) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var9 = null;
            if(!var3) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var8 = _closure1_slot21;
            var5 = var8.getGuildId;
            var9 = var5.bind(var8)();
case 68:
            _fun0008_ip = 70; continue _fun0008;
case 66:
            var9 = var11.guild_id;
case 70:
            var5 = 'channel_id';
            var5 = var5 in var11;
            if(var5) { _fun0008_ip = 71; continue _fun0008 }
case 72:
            var5 = null;
            if(!var3) { _fun0008_ip = 73; continue _fun0008 }
case 74:
            var8 = _closure1_slot20;
            var3 = var8.getChannelId;
            var5 = var3.bind(var8)(var9);
case 73:
            _fun0008_ip = 75; continue _fun0008;
case 71:
            var5 = var11.channel_id;
case 75:
            var8 = _closure1_slot6;
            var3 = var8.getChannel;
            var8 = var3.bind(var8)(var5);
            var3 = null;
            var10 = var5;
            if(!(var3 != var8)) { _fun0008_ip = 76; continue _fun0008 }
case 77:
            var5 = var8.isPrivate;
            var5 = var5.bind(var8)();
            var12 = null;
            if(var5) { _fun0008_ip = 78; continue _fun0008 }
case 79:
            var5 = var8.getGuildId;
            var5 = var5.bind(var8)();
            var13 = var9;
            if(!(var3 != var5)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
            var13 = var5;
case 80:
            var14 = var3 != var13;
            var5 = null;
            if(!var14) { _fun0008_ip = 82; continue _fun0008 }
case 83:
            var5 = var13;
case 82:
            var12 = var5;
case 78:
            _fun0008_ip = 84; continue _fun0008;
case 76:
            var13 = var3 != var9;
            var5 = null;
            if(!var13) { _fun0008_ip = 51; continue _fun0008 }
case 85:
            var5 = var9;
case 51:
            var12 = var5;
case 84:
            var5 = {};
            var17 = var5;
            var16 = var11;
            var11 = copyDataProperties(var17, var16);
            var11 = _closure1_slot33;
            var16 = var11.bind(var1)(var12);
            var17 = var5;
            var11 = copyDataProperties(var17, var16);
            if(!(var3 != var9)) { _fun0008_ip = 86; continue _fun0008 }
case 87:
            if(!(var3 != var10)) { _fun0008_ip = 86; continue _fun0008 }
case 88:
            var3 = _closure1_slot29;
            var3 = var3.bind(var1)(var10);
            if(var3) { _fun0008_ip = 89; continue _fun0008 }
case 86:
            var3 = _closure1_slot35;
            var3 = var3.bind(var1)(var8);
            _fun0008_ip = 90; continue _fun0008;
case 89:
            var9 = _closure1_slot34;
            var8 = 0;
            var3 = var9.bind(var1)(var8, var10);
case 90:
            var17 = var5;
            var16 = var3;
            var3 = copyDataProperties(var17, var16);
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var4 = var3.bind(var1)(var2);
            var3 = var4.track;
            var2 = {};
            var2['flush'] = var7;
            var2 = var3.bind(var4)(var6, var5, var2);
case 64:
            return var1;
        }
    };
    var5 = function getRecipientFriendCounts(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot30;
            var7 = undefined;
            var6 = var1.bind(var7)(var2);
            var4 = var6.bind(var7)();
            var1 = var4.done;
            var5 = var4;
            var4 = 0;
            var3 = 0;
            if(var1) { _fun0009_ip = 9; continue _fun0009 }
case 37:
            var10 = var5.value;
            var9 = _closure1_slot19;
            var1 = var9.isFriend;
            var1 = var1.bind(var9)(var10);
            var9 = var4;
            if(!var1) { _fun0009_ip = 91; continue _fun0009 }
case 92:
            var9 = var4 + 1;
case 91:
            var10 = var6.bind(var7)();
            var1 = var10.done;
            var4 = var9;
            var5 = var10;
            var3 = var4;
            if(!var1) { _fun0009_ip = 37; continue _fun0009 }
case 9:
            var1 = {};
            var1['friendCount'] = var3;
            var2 = var2.length;
            var2 = var2 - var3;
            var1['nonFriendCount'] = var2;
            return var1;
        }
    };
    var _closure1_slot36 = var5;
    var4 = function getVoiceStateMetadata(arg1, arg2, arg3) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = {'voice_state_count': 0, 'video_stream_count': 0};
        var3 = arg3;
        var1['video_enabled'] = var3;
        var _closure2_slot1 = var1;
        var6 = _closure1_slot1;
        var5 = _closure1_slot3;
        var4 = 28;
        var4 = var5[var4];
        var5 = undefined;
        var4 = var6.bind(var5)(var4);
        var7 = _closure1_slot24;
        var6 = var7.getVoiceStates;
        var3 = arg1;
        var3 = var6.bind(var7)(var3);
        var5 = var4.bind(var5)(var3);
        var4 = var5.filter;
        var3 = function(arg1) {
            var1 = arg1;
            var2 = var1.channelId;
            var1 = _closure2_slot0;
            var1 = var2 === var1;
            return var1;
        };
        var5 = var4.bind(var5)(var3);
        var4 = var5.filter;
        var3 = function(arg1) {
            var1 = arg1;
            var2 = var1.userId;
            var3 = _closure1_slot5;
            var1 = var3.getId;
            var1 = var1.bind(var3)();
            var1 = var2 !== var1;
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var4 = _closure2_slot1;
                var2 = var4.voice_state_count;
                var2 = var2 + 1;
                var4['voice_state_count'] = var2;
                var2 = var3.selfVideo;
                if(var2) { _fun0010_ip = 93; continue _fun0010 }
case 94:
                var2 = var3.selfStream;
case 93:
                if(!var2) { _fun0010_ip = 92; continue _fun0010 }
case 95:
                var2 = _closure2_slot1;
                var1 = var2.video_stream_count;
                var1 = var1 + 1;
                var2['video_stream_count'] = var1;
case 92:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot37 = var4;
    var1 = global;
    var15 = var1.Object;
    var14 = var15.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var10);
    var1 = 0;
    var10 = var13[var1];
    var1 = undefined;
    var10 = var12.bind(var1)(var10);
    var10 = var10.THREAD_CHANNEL_TYPES;
    var _closure1_slot4 = var10;
    var10 = 1;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 2;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = 3;
    var14 = var13[var10];
    var14 = var12.bind(var1)(var14);
    var15 = var14.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot7 = var15;
    var14 = var14.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot8 = var14;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot9 = var10;
    var10 = 4;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot10 = var10;
    var10 = 5;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot11 = var10;
    var10 = 6;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot12 = var10;
    var10 = 7;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot13 = var10;
    var10 = 8;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot14 = var10;
    var10 = 9;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot15 = var10;
    var10 = 10;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot16 = var10;
    var10 = 11;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot17 = var10;
    var10 = 12;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot18 = var10;
    var10 = 13;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot19 = var10;
    var10 = 14;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot20 = var10;
    var10 = 15;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot21 = var10;
    var10 = 16;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot22 = var10;
    var10 = 17;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot23 = var10;
    var10 = 18;
    var10 = var13[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot24 = var10;
    var10 = 19;
    var10 = var13[var10];
    var10 = var12.bind(var1)(var10);
    var11 = var10.GuildFeatures;
    var _closure1_slot25 = var11;
    var11 = var10.AnalyticsLocations;
    var _closure1_slot26 = var11;
    var11 = var10.Permissions;
    var _closure1_slot27 = var11;
    var10 = var10.ActivityTypes;
    var _closure1_slot28 = var10;
    var10 = 20;
    var10 = var13[var10];
    var10 = var12.bind(var1)(var10);
    var10 = var10.isStaticChannelRoute;
    var _closure1_slot29 = var10;
    var10 = {};
    var10['trackWithMetadata'] = var6;
    var10['getVoiceStateMetadata'] = var4;
    var11 = 29;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/app_analytics/AppAnalyticsUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var3['default'] = var10;
    var3['collectGuildAnalyticsMetadata'] = var9;
    var3['collectStaticChannelRouteAnalyticsMetadata'] = var8;
    var8 = function collectChannelAnalyticsMetadataFromId(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0011_ip = 96; continue _fun0011 }
case 97:
            var4 = _closure1_slot6;
            var2 = var4.getChannel;
            var5 = var2.bind(var4)(var5);
            var4 = var1 == var5;
            var2 = null;
            if(var4) { _fun0011_ip = 2; continue _fun0011 }
case 98:
            var4 = _closure1_slot35;
            var3 = undefined;
            var2 = var4.bind(var3)(var5);
case 2:
            return var2;
case 96:
            return var1;
        }
    };
    var3['collectChannelAnalyticsMetadataFromId'] = var8;
    var3['collectChannelAnalyticsMetadata'] = var7;
    var7 = function collectVoiceAnalyticsMetadata(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0012_ip = 99; continue _fun0012 }
case 39:
            var4 = _closure1_slot6;
            var2 = var4.getChannel;
            var4 = var2.bind(var4)(var5);
            if(!(var1 != var4)) { _fun0012_ip = 100; continue _fun0012 }
case 37:
            var5 = _closure1_slot14;
            var2 = var5.isVideoEnabled;
            var8 = var2.bind(var5)();
            var5 = _closure1_slot17;
            var2 = var5.getMediaSessionId;
            var5 = var2.bind(var5)();
            var2 = {};
            var6 = var4.id;
            var2['channel_id'] = var6;
            var6 = var4.type;
            var2['channel_type'] = var6;
            var6 = var4.getGuildId;
            var6 = var6.bind(var4)();
            var2['guild_id'] = var6;
            var2['media_session_id'] = var5;
            var7 = _closure1_slot37;
            var5 = var4.getGuildId;
            var6 = var5.bind(var4)();
            var4 = var4.id;
            var5 = undefined;
            var10 = var7.bind(var5)(var6, var4, var8);
            var11 = var2;
            var4 = copyDataProperties(var11, var10);
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 23;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getVoiceAnalyticsMetadataAdditional;
            var10 = var3.bind(var4)();
            var11 = var2;
            var3 = copyDataProperties(var11, var10);
            return var2;
case 100:
            return var1;
case 99:
            return var1;
        }
    };
    var3['collectVoiceAnalyticsMetadata'] = var7;
    var3['trackWithMetadata'] = var6;
    var6 = function getChannelOpenedMetadata(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot29;
            var7 = undefined;
            var1 = var1.bind(var7)(var2);
            if(var1) { _fun0013_ip = 101; continue _fun0013 }
case 31:
            var3 = _closure1_slot6;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var2);
            var3 = null;
            if(!(var3 != var1)) { _fun0013_ip = 102; continue _fun0013 }
case 2:
            var8 = _closure1_slot13;
            var5 = var8.getGuild;
            var4 = var1.guild_id;
            var10 = var5.bind(var8)(var4);
            if(!(var3 != var10)) { _fun0013_ip = 103; continue _fun0013 }
case 104:
            var8 = _closure1_slot18;
            var5 = var8.getSnapshot;
            var11 = _closure1_slot1;
            var9 = _closure1_slot3;
            var4 = 25;
            var4 = var9[var4];
            var4 = var11.bind(var7)(var4);
            var4 = var4.Millis;
            var11 = var4.SECOND;
            var4 = 10;
            var4 = var4 * var11;
            var11 = var5.bind(var8)(var2, var4);
            var4 = {};
            var4['channel_id'] = var2;
            var5 = var11.unread;
            var4['channel_was_unread'] = var5;
            var5 = var11.mentionCount;
            var4['channel_mention_count'] = var5;
            var14 = _closure1_slot22;
            var12 = var14.isChannelMuted;
            var8 = var1.guild_id;
            var5 = var1.id;
            var5 = var12.bind(var14)(var8, var5);
            var4['channel_is_muted'] = var5;
            var5 = var1.isNSFW;
            var5 = var5.bind(var1)();
            var4['channel_is_nsfw'] = var5;
            var5 = var1.isSpoilerChannel;
            var5 = var5.bind(var1)();
            var4['channel_is_spoiler'] = var5;
            var5 = var14.resolveUnreadSetting;
            var5 = var5.bind(var14)(var1);
            var4['channel_resolved_unread_setting'] = var5;
            var8 = _closure1_slot0;
            var5 = 26;
            var12 = var9[var5];
            var16 = var8.bind(var7)(var12);
            var15 = var16.presetFromSettings;
            var12 = var14.resolveUnreadSetting;
            var13 = var12.bind(var14)(var1);
            var12 = var14.resolvedMessageNotifications;
            var12 = var12.bind(var14)(var1);
            var12 = var15.bind(var16)(var13, var12);
            var4['channel_preset'] = var12;
            var12 = var1.guild_id;
            var4['guild_id'] = var12;
            var12 = var11.guildUnread;
            var4['guild_was_unread'] = var12;
            var11 = var11.guildMentionCount;
            var4['guild_mention_count'] = var11;
            var12 = var14.isMuted;
            var11 = var1.guild_id;
            var11 = var12.bind(var14)(var11);
            var4['guild_is_muted'] = var11;
            var11 = var14.resolveGuildUnreadSetting;
            var11 = var11.bind(var14)(var10);
            var4['guild_resolved_unread_setting'] = var11;
            var5 = var9[var5];
            var12 = var8.bind(var7)(var5);
            var11 = var12.presetFromSettings;
            var5 = var14.resolveGuildUnreadSetting;
            var10 = var5.bind(var14)(var10);
            var13 = var14.getMessageNotifications;
            var5 = var1.guild_id;
            var5 = var13.bind(var14)(var5);
            var5 = var11.bind(var12)(var10, var5);
            var4['guild_preset'] = var5;
            var5 = var1.parent_id;
            var4['parent_id'] = var5;
            var5 = var1.parentChannelThreadType;
            var4['parent_channel_type'] = var5;
            var5 = 27;
            var5 = var9[var5];
            var9 = var8.bind(var7)(var5);
            var8 = var9.hasPendingMemberAction;
            var5 = var1.guild_id;
            var5 = var8.bind(var9)(var5, var2);
            var4['has_pending_member_action'] = var5;
            var9 = _closure1_slot15;
            var8 = var9.can;
            var5 = _closure1_slot27;
            var5 = var5.SEND_MESSAGES;
            var5 = var8.bind(var9)(var5, var1);
            var4['can_send_message'] = var5;
            var5 = false;
            var4['is_app_dm'] = var5;
            return var4;
case 103:
            var4 = var1.isDM;
            var5 = var4.bind(var1)();
            var4 = false;
            if(!var5) { _fun0013_ip = 105; continue _fun0013 }
case 106:
            var10 = _closure1_slot23;
            var8 = var10.getUser;
            var11 = var1.recipients;
            var5 = 0;
            var5 = var11[var5];
            var5 = var8.bind(var10)(var5);
            var8 = var3 != var5;
            var4 = false;
            if(!var8) { _fun0013_ip = 105; continue _fun0013 }
case 107:
            var4 = var5.bot;
case 105:
            var5 = var1.isDM;
            var5 = var5.bind(var1)();
            if(var5) { _fun0013_ip = 108; continue _fun0013 }
case 109:
            var5 = var1.isGroupDM;
            var8 = var5.bind(var1)();
            var5 = null;
            if(!var8) { _fun0013_ip = 110; continue _fun0013 }
case 108:
            var6 = _closure1_slot36;
            var1 = var1.recipients;
            var5 = var6.bind(var7)(var1);
case 110:
            var1 = {};
            var1['channel_id'] = var2;
            var1['is_app_dm'] = var4;
            var4 = var3 != var5;
            var3 = null;
            if(!var4) { _fun0013_ip = 111; continue _fun0013 }
case 112:
            var4 = {};
            var6 = var5.friendCount;
            var4['friend_recipient_count'] = var6;
            var5 = var5.nonFriendCount;
            var4['non_friend_recipient_count'] = var5;
            var3 = var4;
case 111:
            var18 = var1;
            var17 = var3;
            var3 = copyDataProperties(var18, var17);
            return var1;
case 102:
            var1 = {};
            var1['channel_id'] = var2;
            return var1;
case 101:
            var1 = {};
            var1['channel_static_route'] = var2;
            return var1;
        }
    };
    var3['getChannelOpenedMetadata'] = var6;
    var3['getRecipientFriendCounts'] = var5;
    var3['getVoiceStateMetadata'] = var4;
    var2 = function getCustomStatusMetadata(arg1, arg2) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = {};
        var3 = 0;
        var1['custom_status_count'] = var3;
        var _closure2_slot1 = var1;
        var6 = _closure1_slot1;
        var5 = _closure1_slot3;
        var4 = 28;
        var4 = var5[var4];
        var5 = undefined;
        var4 = var6.bind(var5)(var4);
        var7 = _closure1_slot24;
        var6 = var7.getVoiceStates;
        var3 = arg1;
        var3 = var6.bind(var7)(var3);
        var4 = var4.bind(var5)(var3);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = arg1;
                var4 = var3.channelId;
                var2 = _closure2_slot0;
                var2 = var4 === var2;
                if(!var2) { _fun0014_ip = 113; continue _fun0014 }
case 114:
                var6 = _closure1_slot16;
                var5 = var6.findActivity;
                var4 = var3.userId;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot28;
                    var1 = var1.CUSTOM_STATUS;
                    var1 = var2 === var1;
                    return var1;
                };
                var4 = var5.bind(var6)(var4, var3);
                var3 = null;
                var2 = var3 != var4;
case 113:
                if(!var2) { _fun0014_ip = 115; continue _fun0014 }
case 92:
                var2 = _closure2_slot1;
                var1 = var2.custom_status_count;
                var1 = var1 + 1;
                var2['custom_status_count'] = var1;
case 115:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['getCustomStatusMetadata'] = var2;
    return var1;
})();