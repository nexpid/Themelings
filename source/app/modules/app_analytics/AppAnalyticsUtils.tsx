// app/modules/app_analytics/AppAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var10;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var12;
    var1 = function countKeys(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var2 = 0;
            var3 = 1;
            var1 = 0;
            for(var4 in var7)
case 2:
            {
                var1 = var2;
case 3:
                var2 = var2 + var3;
                _fun0001_ip = 2; continue _fun0001;
            }
case 4:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var8 = function collectGuildAnalyticsMetadata(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var12 = arg1;
            var1 = null;
            if(!(var1 != var12)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var4 = _closure1_slot13;
            var2 = var4.getGuild;
            var7 = var2.bind(var4)(var12);
            if(!(var1 != var7)) { _fun0002_ip = 7; continue _fun0002 }
case 4:
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
            var5 = _closure1_slot23;
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
            if(!var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var8 = var6.roles;
            var4 = var8.length;
case 8:
            var2['guild_member_num_roles'] = var4;
            var4 = global;
            var9 = var4.String;
            var8 = _closure1_slot15;
            var4 = var8.getGuildPermissions;
            var8 = var4.bind(var8)(var7);
            if(!(var1 == var8)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var11 = _closure1_slot2;
            var10 = _closure1_slot3;
            var4 = 20;
            var10 = var10[var4];
            var4 = undefined;
            var4 = var11.bind(var4)(var10);
            var8 = var4.NONE;
case 10:
            var4 = undefined;
            var8 = var9.bind(var4)(var8);
            var2['guild_member_perms'] = var8;
            var9 = var7.features;
            var8 = var9.has;
            var7 = _closure1_slot24;
            var7 = var7.VIP_REGIONS;
            var7 = var8.bind(var9)(var7);
            var2['guild_is_vip'] = var7;
            var6 = var1 != var6;
            var2['is_member'] = var6;
            var3 = _closure1_slot29;
            var3 = var3.bind(var4)(var5);
            var2['num_voice_channels_active'] = var3;
            return var2;
case 7:
            return var1;
case 5:
            return var1;
        }
    };
    var _closure1_slot30 = var8;
    var7 = function collectStaticChannelRouteAnalyticsMetadata(arg1, arg2) {
        var1 = {};
        var2 = arg2;
        var1['channel_static_route'] = var2;
        var2 = false;
        var1['channel_hidden'] = var2;
        return var1;
    };
    var _closure1_slot31 = var7;
    var6 = function collectChannelAnalyticsMetadata(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg1;
            var1 = null;
            if(!(var1 != var7)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var3 = var7.getGuildId;
            var4 = var3.bind(var7)();
            var _closure2_slot0 = var4;
            var5 = var1 != var4;
            var3 = false;
            if(!var5) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var8 = function isHidden(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = var2.permissionOverwrites;
                    var2 = _closure2_slot0;
                    var3 = var3[var2];
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var4 = 21;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.has;
                    var3 = var3.deny;
                    var2 = _closure1_slot26;
                    var2 = var2.VIEW_CHANNEL;
                    var1 = var4.bind(var5)(var3, var2);
case 18:
                    return var1;
case 16:
                    var1 = false;
                    return var1;
                }
            };
            var9 = _closure1_slot4;
            var6 = var9.has;
            var2 = var7.type;
            var2 = var6.bind(var9)(var2);
            if(!var2) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var2 = var7.parent_id;
            if(!(var1 == var2)) { _fun0003_ip = 22; continue _fun0003 }
case 20:
            var2 = undefined;
            var2 = var8.bind(var2)(var7);
            _fun0003_ip = 23; continue _fun0003;
case 22:
            var9 = _closure1_slot6;
            var6 = var9.getChannel;
            var5 = var7.parent_id;
            var6 = var6.bind(var9)(var5);
            var5 = undefined;
            var2 = var8.bind(var5)(var6);
case 23:
            var3 = var2;
case 14:
            var2 = {};
            var5 = var7.id;
            var2['channel_id'] = var5;
            var5 = var7.type;
            var2['channel_type'] = var5;
            var5 = var7.isPrivate;
            var6 = var5.bind(var7)();
            var5 = 0;
            if(!var6) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var6 = var7.recipients;
            var5 = var6.length;
case 24:
            var2['channel_size_total'] = var5;
            var5 = global;
            var6 = var5.String;
            if(!(var1 != var4)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var5 = _closure1_slot15;
            var4 = var5.getChannelPermissions;
            var5 = var4.bind(var5)(var7);
            if(!(var1 == var5)) { _fun0003_ip = 28; continue _fun0003 }
case 26:
            var8 = _closure1_slot2;
            var7 = _closure1_slot3;
            var4 = 20;
            var7 = var7[var4];
            var4 = undefined;
            var4 = var8.bind(var4)(var7);
            var5 = var4.NONE;
case 28:
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var2['channel_member_perms'] = var4;
            var2['channel_hidden'] = var3;
            return var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot32 = var6;
    var5 = function trackWithMetadata(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var11 = arguments[1];
            var7 = arguments[2];
            var1 = undefined;
            if(!(var11 === var1)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var11 = {};
case 29:
            if(!(var7 === var1)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var7 = false;
case 31:
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var4 = 23;
            var3 = var3[var4];
            var5 = var5.bind(var1)(var3);
            var3 = var5.isThrottled;
            var3 = var3.bind(var5)(var6);
            if(var3) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var3 = 'location';
            var5 = var3 in var11;
            var3 = !var5;
            if(!var5) { _fun0005_ip = 35; continue _fun0005 }
case 20:
            var8 = var11.location;
            var5 = _closure1_slot25;
            var5 = var5.GUILD_CREATE_INVITE_SUGGESTION;
            var3 = var8 !== var5;
case 35:
            var5 = 'guild_id';
            var5 = var5 in var11;
            if(var5) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var9 = null;
            if(!var3) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var8 = _closure1_slot20;
            var5 = var8.getGuildId;
            var9 = var5.bind(var8)();
case 38:
            _fun0005_ip = 40; continue _fun0005;
case 36:
            var9 = var11.guild_id;
case 40:
            var5 = 'channel_id';
            var5 = var5 in var11;
            if(var5) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var5 = null;
            if(!var3) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var8 = _closure1_slot19;
            var3 = var8.getChannelId;
            var5 = var3.bind(var8)(var9);
case 43:
            _fun0005_ip = 45; continue _fun0005;
case 41:
            var5 = var11.channel_id;
case 45:
            var8 = _closure1_slot6;
            var3 = var8.getChannel;
            var8 = var3.bind(var8)(var5);
            var3 = null;
            var10 = var5;
            if(!(var3 != var8)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var5 = var8.isPrivate;
            var5 = var5.bind(var8)();
            var12 = null;
            if(var5) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var5 = var8.getGuildId;
            var5 = var5.bind(var8)();
            var13 = var9;
            if(!(var3 != var5)) { _fun0005_ip = 8; continue _fun0005 }
case 50:
            var13 = var5;
case 8:
            var14 = var3 != var13;
            var5 = null;
            if(!var14) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var5 = var13;
case 51:
            var12 = var5;
case 48:
            _fun0005_ip = 53; continue _fun0005;
case 46:
            var13 = var3 != var9;
            var5 = null;
            if(!var13) { _fun0005_ip = 12; continue _fun0005 }
case 54:
            var5 = var9;
case 12:
            var12 = var5;
case 53:
            var5 = {};
            var17 = var5;
            var16 = var11;
            var11 = copyDataProperties(var17, var16);
            var11 = _closure1_slot30;
            var16 = var11.bind(var1)(var12);
            var17 = var5;
            var11 = copyDataProperties(var17, var16);
            if(!(var3 != var9)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            if(!(var3 != var10)) { _fun0005_ip = 55; continue _fun0005 }
case 57:
            var3 = _closure1_slot28;
            var3 = var3.bind(var1)(var10);
            if(var3) { _fun0005_ip = 58; continue _fun0005 }
case 55:
            var3 = _closure1_slot32;
            var3 = var3.bind(var1)(var8);
            _fun0005_ip = 59; continue _fun0005;
case 58:
            var9 = _closure1_slot31;
            var8 = 0;
            var3 = var9.bind(var1)(var8, var10);
case 59:
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
case 33:
            return var1;
        }
    };
    var4 = function getVoiceStateMetadata(arg1, arg2, arg3) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = {'voice_state_count': 0, 'video_stream_count': 0};
        var3 = arg3;
        var1['video_enabled'] = var3;
        var _closure2_slot1 = var1;
        var6 = _closure1_slot1;
        var5 = _closure1_slot3;
        var4 = 27;
        var4 = var5[var4];
        var5 = undefined;
        var4 = var6.bind(var5)(var4);
        var7 = _closure1_slot23;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var4 = _closure2_slot1;
                var2 = var4.voice_state_count;
                var2 = var2 + 1;
                var4['voice_state_count'] = var2;
                var2 = var3.selfVideo;
                if(var2) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                var2 = var3.selfStream;
case 60:
                if(!var2) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                var2 = _closure2_slot1;
                var1 = var2.video_stream_count;
                var1 = var1 + 1;
                var2['video_stream_count'] = var1;
case 62:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot33 = var4;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var12[var1];
    var1 = undefined;
    var9 = var11.bind(var1)(var9);
    var9 = var9.THREAD_CHANNEL_TYPES;
    var _closure1_slot4 = var9;
    var9 = 1;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 2;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 3;
    var13 = var12[var9];
    var13 = var11.bind(var1)(var13);
    var14 = var13.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot7 = var14;
    var13 = var13.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot8 = var13;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 4;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot10 = var9;
    var9 = 5;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot11 = var9;
    var9 = 6;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot12 = var9;
    var9 = 7;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot13 = var9;
    var9 = 8;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot14 = var9;
    var9 = 9;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot15 = var9;
    var9 = 10;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot16 = var9;
    var9 = 11;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot17 = var9;
    var9 = 12;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot18 = var9;
    var9 = 13;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot19 = var9;
    var9 = 14;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot20 = var9;
    var9 = 15;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot21 = var9;
    var9 = 16;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot22 = var9;
    var9 = 17;
    var9 = var12[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot23 = var9;
    var9 = 18;
    var9 = var12[var9];
    var9 = var11.bind(var1)(var9);
    var10 = var9.GuildFeatures;
    var _closure1_slot24 = var10;
    var10 = var9.AnalyticsLocations;
    var _closure1_slot25 = var10;
    var10 = var9.Permissions;
    var _closure1_slot26 = var10;
    var9 = var9.ActivityTypes;
    var _closure1_slot27 = var9;
    var9 = 19;
    var9 = var12[var9];
    var9 = var11.bind(var1)(var9);
    var9 = var9.isStaticChannelRoute;
    var _closure1_slot28 = var9;
    var9 = {};
    var9['trackWithMetadata'] = var5;
    var9['getVoiceStateMetadata'] = var4;
    var10 = 28;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/app_analytics/AppAnalyticsUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var3['default'] = var9;
    var3['collectGuildAnalyticsMetadata'] = var8;
    var3['collectStaticChannelRouteAnalyticsMetadata'] = var7;
    var7 = function collectChannelAnalyticsMetadataFromId(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0007_ip = 64; continue _fun0007 }
case 17:
            var4 = _closure1_slot6;
            var2 = var4.getChannel;
            var5 = var2.bind(var4)(var5);
            var4 = var1 == var5;
            var2 = null;
            if(var4) { _fun0007_ip = 65; continue _fun0007 }
case 66:
            var4 = _closure1_slot32;
            var3 = undefined;
            var2 = var4.bind(var3)(var5);
case 65:
            return var2;
case 64:
            return var1;
        }
    };
    var3['collectChannelAnalyticsMetadataFromId'] = var7;
    var3['collectChannelAnalyticsMetadata'] = var6;
    var6 = function collectVoiceAnalyticsMetadata(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0008_ip = 67; continue _fun0008 }
case 6:
            var4 = _closure1_slot6;
            var2 = var4.getChannel;
            var4 = var2.bind(var4)(var5);
            if(!(var1 != var4)) { _fun0008_ip = 68; continue _fun0008 }
case 4:
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
            var7 = _closure1_slot33;
            var5 = var4.getGuildId;
            var6 = var5.bind(var4)();
            var4 = var4.id;
            var5 = undefined;
            var10 = var7.bind(var5)(var6, var4, var8);
            var11 = var2;
            var4 = copyDataProperties(var11, var10);
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 22;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getVoiceAnalyticsMetadataAdditional;
            var10 = var3.bind(var4)();
            var11 = var2;
            var3 = copyDataProperties(var11, var10);
            return var2;
case 68:
            return var1;
case 67:
            return var1;
        }
    };
    var3['collectVoiceAnalyticsMetadata'] = var6;
    var3['trackWithMetadata'] = var5;
    var5 = function getChannelOpenedMetadata(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot28;
            var8 = undefined;
            var1 = var1.bind(var8)(var2);
            if(var1) { _fun0009_ip = 69; continue _fun0009 }
case 31:
            var3 = _closure1_slot6;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var2);
            var4 = null;
            if(!(var4 != var1)) { _fun0009_ip = 70; continue _fun0009 }
case 65:
            var7 = _closure1_slot13;
            var5 = var7.getGuild;
            var3 = var1.guild_id;
            var10 = var5.bind(var7)(var3);
            if(!(var4 != var10)) { _fun0009_ip = 71; continue _fun0009 }
case 72:
            var7 = _closure1_slot18;
            var5 = var7.getSnapshot;
            var11 = _closure1_slot1;
            var9 = _closure1_slot3;
            var3 = 24;
            var3 = var9[var3];
            var3 = var11.bind(var8)(var3);
            var3 = var3.Millis;
            var11 = var3.SECOND;
            var3 = 10;
            var3 = var3 * var11;
            var11 = var5.bind(var7)(var2, var3);
            var3 = {};
            var3['channel_id'] = var2;
            var5 = var11.unread;
            var3['channel_was_unread'] = var5;
            var5 = var11.mentionCount;
            var3['channel_mention_count'] = var5;
            var14 = _closure1_slot21;
            var12 = var14.isChannelMuted;
            var7 = var1.guild_id;
            var5 = var1.id;
            var5 = var12.bind(var14)(var7, var5);
            var3['channel_is_muted'] = var5;
            var5 = var1.isNSFW;
            var5 = var5.bind(var1)();
            var3['channel_is_nsfw'] = var5;
            var5 = var14.resolveUnreadSetting;
            var5 = var5.bind(var14)(var1);
            var3['channel_resolved_unread_setting'] = var5;
            var7 = _closure1_slot0;
            var5 = 25;
            var12 = var9[var5];
            var16 = var7.bind(var8)(var12);
            var15 = var16.presetFromSettings;
            var12 = var14.resolveUnreadSetting;
            var13 = var12.bind(var14)(var1);
            var12 = var14.resolvedMessageNotifications;
            var12 = var12.bind(var14)(var1);
            var12 = var15.bind(var16)(var13, var12);
            var3['channel_preset'] = var12;
            var12 = var1.guild_id;
            var3['guild_id'] = var12;
            var12 = var11.guildUnread;
            var3['guild_was_unread'] = var12;
            var11 = var11.guildMentionCount;
            var3['guild_mention_count'] = var11;
            var12 = var14.isMuted;
            var11 = var1.guild_id;
            var11 = var12.bind(var14)(var11);
            var3['guild_is_muted'] = var11;
            var11 = var14.resolveGuildUnreadSetting;
            var11 = var11.bind(var14)(var10);
            var3['guild_resolved_unread_setting'] = var11;
            var5 = var9[var5];
            var12 = var7.bind(var8)(var5);
            var11 = var12.presetFromSettings;
            var5 = var14.resolveGuildUnreadSetting;
            var10 = var5.bind(var14)(var10);
            var13 = var14.getMessageNotifications;
            var5 = var1.guild_id;
            var5 = var13.bind(var14)(var5);
            var5 = var11.bind(var12)(var10, var5);
            var3['guild_preset'] = var5;
            var5 = var1.parent_id;
            var3['parent_id'] = var5;
            var5 = var1.parentChannelThreadType;
            var3['parent_channel_type'] = var5;
            var5 = 26;
            var5 = var9[var5];
            var8 = var7.bind(var8)(var5);
            var7 = var8.hasPendingMemberAction;
            var5 = var1.guild_id;
            var5 = var7.bind(var8)(var5, var2);
            var3['has_pending_member_action'] = var5;
            var8 = _closure1_slot15;
            var7 = var8.can;
            var5 = _closure1_slot26;
            var5 = var5.SEND_MESSAGES;
            var5 = var7.bind(var8)(var5, var1);
            var3['can_send_message'] = var5;
            var5 = false;
            var3['is_app_dm'] = var5;
            return var3;
case 71:
            var3 = var1.isDM;
            var7 = var3.bind(var1)();
            var3 = false;
            if(!var7) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var7 = _closure1_slot22;
            var6 = var7.getUser;
            var8 = var1.recipients;
            var1 = 0;
            var1 = var8[var1];
            var1 = var6.bind(var7)(var1);
            var4 = var4 != var1;
            var3 = false;
            if(!var4) { _fun0009_ip = 73; continue _fun0009 }
case 75:
            var3 = var1.bot;
case 73:
            var1 = {};
            var1['channel_id'] = var2;
            var1['is_app_dm'] = var3;
            return var1;
case 70:
            var1 = {};
            var1['channel_id'] = var2;
            return var1;
case 69:
            var1 = {};
            var1['channel_static_route'] = var2;
            return var1;
        }
    };
    var3['getChannelOpenedMetadata'] = var5;
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
        var4 = 27;
        var4 = var5[var4];
        var5 = undefined;
        var4 = var6.bind(var5)(var4);
        var7 = _closure1_slot23;
        var6 = var7.getVoiceStates;
        var3 = arg1;
        var3 = var6.bind(var7)(var3);
        var4 = var4.bind(var5)(var3);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var4 = var3.channelId;
                var2 = _closure2_slot0;
                var2 = var4 === var2;
                if(!var2) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                var6 = _closure1_slot16;
                var5 = var6.findActivity;
                var4 = var3.userId;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot27;
                    var1 = var1.CUSTOM_STATUS;
                    var1 = var2 === var1;
                    return var1;
                };
                var4 = var5.bind(var6)(var4, var3);
                var3 = null;
                var2 = var3 != var4;
case 76:
                if(!var2) { _fun0010_ip = 78; continue _fun0010 }
case 62:
                var2 = _closure2_slot1;
                var1 = var2.custom_status_count;
                var1 = var1 + 1;
                var2['custom_status_count'] = var1;
case 78:
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