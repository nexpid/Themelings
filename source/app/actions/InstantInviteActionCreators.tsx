// app/actions/InstantInviteActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var8;
    var1 = function generateAcceptInviteOptions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var4 = var2.target_type;
            var3 = _closure1_slot37;
            var3 = var3.STREAM;
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot37;
            var3 = var3.EMBEDDED_APPLICATION;
            if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot37;
            var3 = var3.ROLE_SUBSCRIPTIONS_PURCHASE;
            if(!(var3 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var2.target_type;
            var1['targetType'] = var3;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var3 = var2.target_type;
            var1['targetType'] = var3;
            var4 = var2.target_application;
            var3 = null;
            var5 = var3 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var4.id;
case 8:
            var1['targetApplicationId'] = var3;
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var3 = var2.target_type;
            var1['targetType'] = var3;
            var4 = var2.target_user;
            var3 = null;
            var5 = var3 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var4.id;
case 10:
            var1['targetUserId'] = var3;
case 6:
            var8 = _closure1_slot17;
            var7 = var8.getGuild;
            var9 = var2.guild;
            var4 = null;
            var10 = var4 == var9;
            var5 = undefined;
            var3 = undefined;
            if(var10) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var9.id;
case 12:
            var3 = var7.bind(var8)(var3);
            var7 = var4 != var3;
            var3 = !var7;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var2.new_member;
case 14:
            var7 = var3;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var2.channel;
            var7 = var4 != var8;
case 16:
            if(!var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = _closure1_slot8;
            var8 = var2.channel;
            var8 = var8.type;
            var7 = var9.bind(var5)(var8);
case 18:
            if(!var7) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var7 = var2.channel;
            var7 = var7.id;
            var1['welcomeModalChannelId'] = var7;
case 20:
            var7 = var2.guild_scheduled_event;
            if(!(var4 != var7)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = var2.guild_scheduled_event;
            var1['guildScheduledEvent'] = var7;
case 22:
            var8 = _closure1_slot0;
            var7 = _closure1_slot3;
            var10 = 21;
            var7 = var7[var10];
            var15 = var8.bind(var5)(var7);
            var14 = var15.hasFlag;
            var7 = var2.flags;
            var8 = var4 != var7;
            var13 = 0;
            if(!var8) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var13 = var7;
case 24:
            var8 = _closure1_slot0;
            var7 = _closure1_slot3;
            var11 = 22;
            var12 = var7[var11];
            var12 = var8.bind(var5)(var12);
            var12 = var12.GuildInviteFlags;
            var12 = var12.IS_GUEST_INVITE;
            var12 = var14.bind(var15)(var13, var12);
            var1['isGuestInvite'] = var12;
            var7 = var7[var10];
            var8 = var8.bind(var5)(var7);
            var7 = var8.hasFlag;
            var10 = var2.flags;
            var12 = var4 != var10;
            var9 = 0;
            if(!var12) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var9 = var10;
case 26:
            var10 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var11];
            var6 = var10.bind(var5)(var6);
            var6 = var6.GuildInviteFlags;
            var6 = var6.IS_APPLICATION_BYPASS;
            var6 = var7.bind(var8)(var9, var6);
            var1['isApplicationBypassInvite'] = var6;
            var6 = var2.inviter;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var5 = var6.id;
case 28:
            var1['inviterUserId'] = var5;
            if(var3) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var3 = true;
            var1['forceTransition'] = var3;
case 30:
            var3 = var2.target_channel_id;
            if(!(var4 != var3)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var3 = var2.target_channel_id;
            var1['targetChannelId'] = var3;
            var3 = var2.target_message_id;
            if(!(var4 != var3)) { _fun0001_ip = 32; continue _fun0001 }
case 34:
            var2 = var2.target_message_id;
            var1['targetMessageId'] = var2;
case 32:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function getTransition(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg2;
            var10 = arguments[2];
            var12 = undefined;
            if(!(var10 === var12)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var10 = false;
case 35:
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var12;
            var3 = arg1;
            var7 = var3.type;
            var4 = null;
            if(!(var4 == var2)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var2 = {};
case 37:
            var3 = var2.transitionTo;
            _closure2_slot0 = var3;
            var8 = var2.welcomeModalChannelId;
            var2 = var2.guildScheduledEvent;
            var3 = _closure1_slot25;
            var5 = var3.GUILD_STAGE_VOICE;
            var3 = {};
            var11 = _closure1_slot1;
            var13 = _closure1_slot3;
            var9 = 24;
            var9 = var13[var9];
            var9 = var11.bind(var12)(var9);
            var9 = var9.INVITE_ACCEPT;
            var3['source'] = var9;
            var9 = true;
            var3['navigationReplace'] = var9;
            _closure2_slot1 = var3;
            if(!var10) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var3['openChannel'] = var9;
case 39:
            if(!(var4 != var8)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var3['welcomeModalChannelId'] = var8;
case 41:
            if(!(var7 === var5)) { _fun0002_ip = 43; continue _fun0002 }
case 11:
            var5 = {};
            var6 = _closure1_slot38;
            var5['stageInviteKey'] = var6;
            var3['state'] = var5;
case 43:
            if(!(var4 != var2)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var2 = var2.id;
            var3['guildScheduledEventId'] = var2;
case 44:
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0003_ip = 46; continue _fun0003 }
case 35:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 25;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.transitionTo;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var5, var1);
                    _fun0003_ip = 47; continue _fun0003;
case 46:
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var5, var3);
case 47:
                    return var1;
                }
            };
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = function transitionToInviteChannel(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var10 = var1.guildId;
            var _closure2_slot0 = var10;
            var9 = var1.channel;
            var _closure2_slot1 = var9;
            var8 = var1.options;
            var _closure2_slot2 = var8;
            var12 = var1.analyticsLocations;
            var1 = undefined;
            if(!(var12 === var1)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var12 = new Array(0);
case 48:
            var _closure2_slot3 = var12;
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var1;
            var _closure2_slot6 = var1;
            var _closure2_slot7 = var1;
            var _closure2_slot8 = var1;
            var _closure2_slot9 = var1;
            var _closure2_slot10 = var1;
            var4 = function runDeepLinkJump() {
                var6 = _closure1_slot41;
                var5 = _closure2_slot1;
                var4 = _closure2_slot2;
                var3 = undefined;
                var2 = true;
                var2 = var6.bind(var3)(var5, var4, var2);
                var1 = _closure2_slot10;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = _closure1_slot17;
            var5 = var6.getGuild;
            var6 = var5.bind(var6)(var10);
            var13 = null;
            var7 = var13 == var6;
            var5 = undefined;
            if(var7) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var11 = var6.features;
            var7 = var11.has;
            var6 = _closure1_slot29;
            var6 = var6.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var5 = var7.bind(var11)(var6);
case 50:
            var6 = var8;
            if(!(var13 == var6)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var6 = {};
case 52:
            var7 = var6.targetUserId;
            _closure2_slot4 = var7;
            var16 = var6.targetType;
            _closure2_slot5 = var16;
            var14 = var6.targetApplicationId;
            _closure2_slot6 = var14;
            var7 = var6.isGuestInvite;
            _closure2_slot7 = var7;
            var6 = var6.isApplicationBypassInvite;
            if(var7) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            if(var6) { _fun0004_ip = 54; continue _fun0004 }
case 56:
            if(!(var13 != var8)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var6 = var8.forceTransition;
            if(var6) { _fun0004_ip = 54; continue _fun0004 }
case 57:
            if(!var5) { _fun0004_ip = 54; continue _fun0004 }
case 59:
            var6 = _closure1_slot22;
            var5 = var6.getGuildId;
            var5 = var5.bind(var6)();
            if(!(var5 === var10)) { _fun0004_ip = 60; continue _fun0004 }
case 54:
            var11 = var9.type;
            var7 = _closure1_slot14;
            var6 = var7.getChannel;
            var5 = var9.id;
            var17 = var6.bind(var7)(var5);
            var5 = var13 == var8;
            var6 = undefined;
            if(var5) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var6 = var8.targetChannelId;
case 61:
            if(!(var13 != var6)) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var7 = _closure1_slot14;
            var5 = var7.getChannel;
            var18 = var5.bind(var7)(var6);
            if(!(var13 != var18)) { _fun0004_ip = 63; continue _fun0004 }
case 65:
            var15 = _closure1_slot20;
            var7 = var15.can;
            var19 = _closure1_slot12;
            var5 = var18.type;
            var5 = var19.bind(var1)(var5);
            var5 = var7.bind(var15)(var5, var18);
            var15 = var6;
            if(var5) { _fun0004_ip = 66; continue _fun0004 }
case 63:
            var6 = var13 == var8;
            var5 = undefined;
            if(var6) { _fun0004_ip = 67; continue _fun0004 }
case 68:
            var5 = var8.targetType;
case 67:
            if(!(var13 == var5)) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var6 = _closure1_slot9;
            var5 = var9.type;
            var5 = var6.bind(var1)(var5);
            if(var5) { _fun0004_ip = 69; continue _fun0004 }
case 71:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var5 = 23;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.canSeeOnboardingHome;
            var5 = var5.bind(var6)(var10);
            if(!var5) { _fun0004_ip = 69; continue _fun0004 }
case 72:
            var5 = _closure1_slot35;
            var15 = var5.GUILD_HOME;
            _fun0004_ip = 66; continue _fun0004;
case 69:
            var7 = _closure1_slot14;
            var6 = var7.getChannel;
            var5 = var9.id;
            var18 = var6.bind(var7)(var5);
            var6 = _closure1_slot12;
            var5 = var9.type;
            var7 = var6.bind(var1)(var5);
            var6 = _closure1_slot20;
            var5 = var6.can;
            var5 = var5.bind(var6)(var7, var18);
            if(var5) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var18 = _closure1_slot15;
            var7 = var18.getDefaultChannel;
            var5 = _closure1_slot32;
            var6 = var5.CREATE_INSTANT_INVITE;
            var5 = true;
            var6 = var7.bind(var18)(var10, var5, var6);
            var7 = var13 == var6;
            var5 = undefined;
            if(var7) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            var5 = var6.id;
case 75:
            if(!(var13 == var5)) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var5 = var9.id;
case 77:
            _fun0004_ip = 79; continue _fun0004;
case 73:
            var5 = var9.id;
case 79:
            var15 = var5;
case 66:
            _closure2_slot8 = var15;
            var5 = _closure1_slot25;
            var5 = var5.GUILD_STAGE_VOICE;
            var5 = var11 === var5;
            _closure2_slot9 = var5;
            var6 = var13 == var8;
            var5 = undefined;
            if(var6) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var5 = var8.targetChannelId;
case 80:
            var7 = var13 != var5;
            if(!var7) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var5 = var8.targetChannelId;
            var7 = var15 === var5;
case 82:
            var18 = undefined;
            if(!var7) { _fun0004_ip = 84; continue _fun0004 }
case 85:
            var6 = var13 == var8;
            var5 = undefined;
            if(var6) { _fun0004_ip = 86; continue _fun0004 }
case 87:
            var5 = var8.targetMessageId;
case 86:
            var18 = var5;
case 84:
            var6 = _closure1_slot26;
            var5 = var6.CHANNEL;
            var6 = var5.bind(var6)(var10, var15, var18);
            _closure2_slot10 = var6;
            var5 = var9.id;
            if(!(var15 === var5)) { _fun0004_ip = 88; continue _fun0004 }
case 89:
            var5 = _closure1_slot9;
            var5 = var5.bind(var1)(var11);
            if(!var5) { _fun0004_ip = 88; continue _fun0004 }
case 90:
            var5 = var13 == var8;
            var11 = undefined;
            if(var5) { _fun0004_ip = 91; continue _fun0004 }
case 92:
            var11 = var8.autoJoin;
case 91:
            var5 = false;
            if(!(var5 === var11)) { _fun0004_ip = 93; continue _fun0004 }
case 88:
            var11 = _closure1_slot0;
            var18 = _closure1_slot3;
            var5 = 36;
            var5 = var18[var5];
            var11 = var11.bind(var1)(var5);
            var5 = var11.isActivityInTextSupportedForChannel;
            var5 = var5.bind(var11)(var17);
            if(!var5) { _fun0004_ip = 94; continue _fun0004 }
case 95:
            var11 = _closure1_slot37;
            var11 = var11.EMBEDDED_APPLICATION;
            var5 = var16 === var11;
case 94:
            if(!var5) { _fun0004_ip = 96; continue _fun0004 }
case 97:
            var5 = var13 != var14;
case 96:
            if(!var5) { _fun0004_ip = 98; continue _fun0004 }
case 99:
            var11 = _closure1_slot0;
            var16 = _closure1_slot3;
            var5 = 25;
            var5 = var16[var5];
            var16 = var11.bind(var1)(var5);
            var11 = var16.transitionTo;
            var18 = _closure1_slot26;
            var17 = var18.CHANNEL;
            var5 = var10;
            if(!(var13 == var5)) { _fun0004_ip = 100; continue _fun0004 }
case 101:
            var5 = _closure1_slot27;
case 100:
            var5 = var17.bind(var18)(var5, var15);
            var5 = var11.bind(var16)(var5);
            var11 = _closure1_slot1;
            var16 = _closure1_slot3;
            var5 = 32;
            var5 = var16[var5];
            var11 = var11.bind(var1)(var5);
            var5 = {};
            var5['channelId'] = var15;
            var5['applicationId'] = var14;
            var15 = var13 == var8;
            var14 = undefined;
            if(var15) { _fun0004_ip = 102; continue _fun0004 }
case 103:
            var14 = var8.intent;
case 102:
            var5['intent'] = var14;
            var14 = var13 == var8;
            var13 = undefined;
            if(var14) { _fun0004_ip = 104; continue _fun0004 }
case 105:
            var13 = var8.inviterUserId;
case 104:
            var5['inviterUserId'] = var13;
            var5['analyticsLocations'] = var12;
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var12 = 33;
            var12 = var14[var12];
            var12 = var13.bind(var1)(var12);
            var12 = var12.CommandOrigin;
            var12 = var12.CHAT;
            var5['commandOrigin'] = var12;
            var5 = var11.bind(var1)(var5);
            _fun0004_ip = 98; continue _fun0004;
case 93:
            var11 = _closure1_slot5;
            var5 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 27;
                var3 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = 26;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = arg1;
                        var2 = var2.default;
                        var _closure4_slot0 = var2;
                        var2 = function connect() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var2 = _closure2_slot9;
                                if(var2) { _fun0006_ip = 106; continue _fun0006 }
case 107:
                                var2 = _closure2_slot2;
                                var7 = null;
                                var2 = var7 != var2;
                                if(!var2) { _fun0006_ip = 108; continue _fun0006 }
case 109:
                                var3 = _closure2_slot2;
                                var2 = var3.muteOnJoinVoiceChannel;
case 108:
                                if(!var2) { _fun0006_ip = 110; continue _fun0006 }
case 111:
                                var4 = _closure1_slot1;
                                var8 = _closure1_slot3;
                                var3 = 29;
                                var3 = var8[var3];
                                var6 = undefined;
                                var5 = var4.bind(var6)(var3);
                                var4 = var5.setSelfMute;
                                var3 = _closure1_slot0;
                                var2 = 30;
                                var2 = var8[var2];
                                var2 = var3.bind(var6)(var2);
                                var2 = var2.MediaEngineContextTypes;
                                var3 = var2.DEFAULT;
                                var2 = true;
                                var2 = var4.bind(var5)(var3, var2);
case 110:
                                var4 = _closure4_slot0;
                                var3 = var4.selectVoiceChannel;
                                var2 = _closure2_slot8;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure2_slot5;
                                var2 = _closure1_slot37;
                                var2 = var2.STREAM;
                                var2 = var3 === var2;
                                if(!var2) { _fun0006_ip = 43; continue _fun0006 }
case 6:
                                var3 = _closure2_slot4;
                                var2 = var7 != var3;
case 43:
                                if(!var2) { _fun0006_ip = 54; continue _fun0006 }
case 112:
                                var4 = _closure1_slot2;
                                var3 = _closure1_slot3;
                                var2 = 31;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.watchStreamAndTransitionToStream;
                                var2 = {};
                                var6 = _closure1_slot36;
                                var6 = var6.GUILD;
                                var2['streamType'] = var6;
                                var6 = _closure2_slot4;
                                var2['ownerId'] = var6;
                                var6 = _closure2_slot0;
                                var2['guildId'] = var6;
                                var6 = _closure2_slot8;
                                var2['channelId'] = var6;
                                var2 = var3.bind(var4)(var2);
case 54:
                                var3 = _closure2_slot5;
                                var2 = _closure1_slot37;
                                var2 = var2.EMBEDDED_APPLICATION;
                                var2 = var3 === var2;
                                if(!var2) { _fun0006_ip = 113; continue _fun0006 }
case 114:
                                var3 = _closure2_slot6;
                                var2 = var7 != var3;
case 113:
                                if(!var2) { _fun0006_ip = 115; continue _fun0006 }
case 116:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var2 = 25;
                                var2 = var4[var2];
                                var4 = undefined;
                                var6 = var3.bind(var4)(var2);
                                var3 = var6.transitionTo;
                                var10 = _closure1_slot26;
                                var9 = var10.CHANNEL;
                                var2 = _closure2_slot0;
                                if(!(var7 == var2)) { _fun0006_ip = 117; continue _fun0006 }
case 118:
                                var8 = _closure1_slot27;
                                _fun0006_ip = 119; continue _fun0006;
case 117:
                                var8 = _closure2_slot0;
case 119:
                                var2 = _closure2_slot8;
                                var2 = var9.bind(var10)(var8, var2);
                                var2 = var3.bind(var6)(var2);
                                var3 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var2 = 32;
                                var2 = var6[var2];
                                var3 = var3.bind(var4)(var2);
                                var2 = {};
                                var6 = _closure2_slot8;
                                var2['channelId'] = var6;
                                var6 = _closure2_slot6;
                                var2['applicationId'] = var6;
                                var6 = _closure2_slot2;
                                var8 = var7 == var6;
                                var6 = undefined;
                                if(var8) { _fun0006_ip = 120; continue _fun0006 }
case 121:
                                var8 = _closure2_slot2;
                                var6 = var8.intent;
case 120:
                                var2['intent'] = var6;
                                var6 = _closure2_slot2;
                                var7 = var7 == var6;
                                var6 = undefined;
                                if(var7) { _fun0006_ip = 122; continue _fun0006 }
case 123:
                                var7 = _closure2_slot2;
                                var6 = var7.inviterUserId;
case 122:
                                var2['inviterUserId'] = var6;
                                var6 = _closure2_slot3;
                                var2['analyticsLocations'] = var6;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var5 = 33;
                                var5 = var7[var5];
                                var5 = var6.bind(var4)(var5);
                                var5 = var5.CommandOrigin;
                                var5 = var5.CHAT;
                                var2['commandOrigin'] = var5;
                                var2 = var3.bind(var4)(var2);
case 115:
                                var2 = undefined;
                                return var2;
case 106:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var3 = 28;
                                var3 = var4[var3];
                                var4 = undefined;
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.connectAndOpen;
                                var7 = _closure2_slot1;
                                var3 = _closure1_slot11;
                                var3 = var7 instanceof var3;
                                if(var3) { _fun0006_ip = 124; continue _fun0006 }
case 125:
                                var7 = _closure1_slot10;
                                var3 = _closure2_slot1;
                                var3 = var7.bind(var4)(var3);
                                _fun0006_ip = 126; continue _fun0006;
case 124:
                                var3 = _closure2_slot1;
case 126:
                                var3 = var5.bind(var6)(var3);
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var2 = 25;
                                var2 = var5[var2];
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.transitionTo;
                                var1 = _closure2_slot10;
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = _closure2_slot7;
                        if(var3) { _fun0005_ip = 127; continue _fun0005 }
case 128:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 34;
                        var4 = var5[var4];
                        var5 = undefined;
                        var8 = var6.bind(var5)(var4);
                        var7 = var8.shouldShowMembershipVerificationGate;
                        var6 = _closure2_slot0;
                        var9 = _closure1_slot17;
                        var4 = new Array(3);
                        var4[0] = var9;
                        var9 = _closure1_slot23;
                        var4[1] = var9;
                        var9 = _closure1_slot16;
                        var4[2] = var9;
                        var4 = var7.bind(var8)(var6, var4);
                        if(!var4) { _fun0005_ip = 127; continue _fun0005 }
case 129:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var3 = 35;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.openMemberVerificationModal;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var4)(var1, var2);
                        _fun0005_ip = 130; continue _fun0005;
case 127:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 130:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = var11.bind(var1)(var5);
case 98:
            if(!var7) { _fun0004_ip = 131; continue _fun0004 }
case 132:
            var5 = _closure1_slot27;
            if(!(var10 === var5)) { _fun0004_ip = 133; continue _fun0004 }
case 131:
            var5 = _closure1_slot41;
            var5 = var5.bind(var1)(var9, var8, var7);
            var5 = var5.bind(var1)(var6);
            _fun0004_ip = 60; continue _fun0004;
case 133:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var5 = 27;
            var5 = var3[var5];
            var6 = var6.bind(var1)(var5);
            var5 = 37;
            var5 = var3[var5];
            var3 = var3.paths;
            var5 = var6.bind(var1)(var5, var3);
            var3 = var5.then;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.default;
                var2 = {};
                var1 = _closure2_slot0;
                var2['guildId'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var3.bind(var5)(var2);
            var2 = var3.then;
            var2 = var2.bind(var3)(var4, var4);
case 60:
            return var1;
        }
    };
    var _closure1_slot42 = var1;
    var1 = function transitionToInviteChannelSync(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arguments[2];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0007_ip = 128; continue _fun0007 }
case 134:
            var3 = new Array(0);
case 128:
            var _closure2_slot2 = var3;
            var4 = _closure1_slot14;
            var3 = var4.addConditionalChangeListener;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot14;
                    var2 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var7 = var2.bind(var4)(var1);
                    var2 = _closure1_slot23;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var10 = null;
                    var1 = var10 == var7;
                    if(var1) { _fun0008_ip = 135; continue _fun0008 }
case 136:
                    var1 = var10 == var4;
case 135:
                    if(var1) { _fun0008_ip = 137; continue _fun0008 }
case 7:
                    var2 = var7.nsfw;
                    if(!var2) { _fun0008_ip = 138; continue _fun0008 }
case 139:
                    var4 = var4.nsfwAllowed;
                    var2 = !var4;
case 138:
                    if(var2) { _fun0008_ip = 140; continue _fun0008 }
case 141:
                    var4 = var7.isGuildVocalOrThread;
                    var4 = var4.bind(var7)();
                    if(!var4) { _fun0008_ip = 39; continue _fun0008 }
case 142:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 41;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var8.bind(var5)(var6);
                    var6 = var8.maybeOpenAgeGateForVoiceChannel;
                    var5 = _closure2_slot0;
                    var4 = var6.bind(var8)(var5);
case 39:
                    var2 = var4;
case 140:
                    if(var2) { _fun0008_ip = 143; continue _fun0008 }
case 144:
                    var4 = var7.isGuildVocalOrThread;
                    var4 = var4.bind(var7)();
                    if(!var4) { _fun0008_ip = 145; continue _fun0008 }
case 10:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 42;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var8.bind(var5)(var6);
                    var6 = var8.maybeOpenSpoilerGateForVoiceChannel;
                    var5 = _closure2_slot0;
                    var4 = var6.bind(var8)(var5);
case 145:
                    var2 = var4;
case 143:
                    var2 = !var2;
                    if(!var2) { _fun0008_ip = 146; continue _fun0008 }
case 147:
                    var4 = _closure2_slot1;
                    var6 = var10 == var4;
                    var5 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0008_ip = 59; continue _fun0008 }
case 148:
                    var6 = _closure2_slot1;
                    var4 = var6.guildScheduledEvent;
case 59:
                    if(!(var10 == var4)) { _fun0008_ip = 149; continue _fun0008 }
case 16:
                    var6 = _closure1_slot42;
                    var4 = {};
                    var8 = var7.getGuildId;
                    var8 = var8.bind(var7)();
                    if(!(var10 == var8)) { _fun0008_ip = 150; continue _fun0008 }
case 151:
                    var8 = _closure1_slot27;
case 150:
                    var4['guildId'] = var8;
                    var4['channel'] = var7;
                    var7 = _closure2_slot1;
                    var4['options'] = var7;
                    var7 = _closure2_slot2;
                    var4['analyticsLocations'] = var7;
                    var4 = var6.bind(var5)(var4);
                    var2 = false;
                    _fun0008_ip = 146; continue _fun0008;
case 149:
                    var4 = _closure2_slot1;
                    var3 = function transitionToInviteEvent(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.guildScheduledEvent;
                            var _closure4_slot0 = var3;
                            var2 = var2.welcomeModalChannelId;
                            var _closure4_slot1 = var2;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0009_ip = 135; continue _fun0009 }
case 152:
                            var3 = _closure1_slot5;
                            var2 = undefined;
                            var1 = function() {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    var5 = {};
                                    var1 = _closure4_slot0;
                                    var1 = var1.id;
                                    var5['guildScheduledEventId'] = var1;
                                    var3 = _closure4_slot1;
                                    var1 = null;
                                    if(!(var1 != var3)) { _fun0010_ip = 111; continue _fun0010 }
case 128:
                                    var1 = _closure4_slot1;
                                    var5['welcomeModalChannelId'] = var1;
case 111:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var1 = 38;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.transitionToEventDetailsFromInvite;
                                    var2 = _closure4_slot0;
                                    var2 = var3.bind(var4)(var2, var5);
                                    return var1;
                                }
                            };
                            var1 = var3.bind(var2)(var1);
case 135:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var5)(var4);
                    var2 = false;
case 146:
                    var1 = var2;
case 137:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot43 = var1;
    var1 = function _transitionToGuildFromEventInvite() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0011_ip = 9; continue _fun0011 }
case 153:
                    var7 = var6.guild_id;
                    var4 = var6.channel_id;
                    var5 = _closure1_slot7;
                    var2 = undefined;
                    var5 = var5.bind(var2)(var6);
                    if(!var5) { _fun0011_ip = 154; continue _fun0011 }
case 155:
                    var5 = null;
                    if(!(var5 == var4)) { _fun0011_ip = 156; continue _fun0011 }
case 154:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 43;
                    var5 = var8[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.transitionToGuildSync;
                    var5 = var5.bind(var6)(var7);
                    SaveGenerator(address=78);
case 157:
                    return var5;
case 158:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!var6) { _fun0011_ip = 159; continue _fun0011 }
case 160:
                    return var5;
case 156:
                    var3 = _closure1_slot43;
                    var3 = var3.bind(var2)(var4);
case 159:
                    return var2;
case 9:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot44 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot44 = var1;
    var2 = function trackInviteServerClicked(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var7 = arg3;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 44;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot30;
            var3 = var2.INVITE_SERVER_CLICKED;
            var2 = {};
            var6 = arg1;
            var2['guild_id'] = var6;
            var6 = arg2;
            var2['action'] = var6;
            var6 = null;
            var8 = var6 != var7;
            if(!var8) { _fun0012_ip = 161; continue _fun0012 }
case 162:
            var6 = var7;
case 161:
            var2['location_stack'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.addPostConnectionCallback;
    var _closure1_slot5 = var5;
    var5 = 2;
    var9 = var8[var5];
    var9 = var6.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.isGuildScheduledEventActive;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var9 = var5.isGuildTextChannelType;
    var _closure1_slot8 = var9;
    var9 = var5.isGuildVocalChannelOrVocalThreadType;
    var _closure1_slot9 = var9;
    var9 = var5.createChannelRecord;
    var _closure1_slot10 = var9;
    var9 = var5.ChannelRecordBase;
    var _closure1_slot11 = var9;
    var5 = var5.getAccessPermissions;
    var _closure1_slot12 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot14 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot15 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot16 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot17 = var5;
    var5 = 9;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot18 = var5;
    var5 = 10;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot19 = var5;
    var5 = 11;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot20 = var5;
    var5 = 12;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot21 = var5;
    var5 = 13;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot22 = var5;
    var5 = 14;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot23 = var5;
    var5 = 15;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var6 = var5.Endpoints;
    var _closure1_slot24 = var6;
    var6 = var5.ChannelTypes;
    var _closure1_slot25 = var6;
    var6 = var5.Routes;
    var _closure1_slot26 = var6;
    var6 = var5.ME;
    var _closure1_slot27 = var6;
    var6 = var5.RPCCommands;
    var _closure1_slot28 = var6;
    var6 = var5.GuildFeatures;
    var _closure1_slot29 = var6;
    var6 = var5.AnalyticEvents;
    var _closure1_slot30 = var6;
    var6 = var5.UserFlags;
    var _closure1_slot31 = var6;
    var6 = var5.Permissions;
    var _closure1_slot32 = var6;
    var5 = var5.AbortCodes;
    var _closure1_slot33 = var5;
    var5 = 16;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.AgeGateSource;
    var _closure1_slot34 = var5;
    var5 = 17;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.StaticChannelRoute;
    var _closure1_slot35 = var5;
    var5 = 18;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.StreamTypes;
    var _closure1_slot36 = var5;
    var5 = 19;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.InviteTargetTypes;
    var _closure1_slot37 = var5;
    var5 = 20;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.STAGE_INVITE_STATE_KEY;
    var _closure1_slot38 = var5;
    var5 = null;
    var _closure1_slot39 = var5;
    var5 = {};
    var6 = function resolveInvite(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var4;
            var9 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 39;
            var7 = var3[var1];
            var3 = undefined;
            var9 = var9.bind(var3)(var7);
            var7 = var9.isDispatching;
            var7 = var7.bind(var9)();
            if(var7) { _fun0013_ip = 163; continue _fun0013 }
case 164:
            var7 = _closure1_slot1;
            var8 = _closure1_slot3;
            var1 = var8[var1];
            var10 = var7.bind(var3)(var1);
            var9 = var10.dispatch;
            var1 = {};
            var11 = 'INVITE_RESOLVE';
            var1['type'] = var11;
            var1['code'] = var6;
            var1 = var9.bind(var10)(var1);
            var1 = 40;
            var1 = var8[var1];
            var1 = var7.bind(var3)(var1);
            var4 = var1.bind(var3)(var6, var5, var4);
            var3 = var4.then;
            var1 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.invite;
                    var2 = var1.code;
                    var6 = var1.banned;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0014_ip = 160; continue _fun0014 }
case 109:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 39;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.dispatch;
                    var1 = {};
                    var7 = 'INVITE_RESOLVE_FAILURE';
                    var1['type'] = var7;
                    var1['code'] = var2;
                    var1['banned'] = var6;
                    var1 = var4.bind(var5)(var1);
                    _fun0014_ip = 163; continue _fun0014;
case 160:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 39;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.dispatch;
                    var1 = {};
                    var6 = 'INVITE_RESOLVE_SUCCESS';
                    var1['type'] = var6;
                    var1['invite'] = var3;
                    var1['code'] = var2;
                    var1 = var4.bind(var5)(var1);
case 163:
                    var1 = {};
                    var1['invite'] = var3;
                    var1['code'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            _fun0013_ip = 165; continue _fun0013;
case 163:
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.resolve;
            var4 = var3.bind(var4)();
            var3 = var4.then;
            var2 = function() {
                var5 = _closure1_slot45;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 165:
            return var1;
        }
    };
    var _closure1_slot45 = var6;
    var5['resolveInvite'] = var6;
    var6 = function getInviteContext(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg2;
            var1 = {};
            var2 = arg1;
            var1['location'] = var2;
            var5 = null;
            var6 = var5 == var3;
            var4 = undefined;
            if(var6) { _fun0015_ip = 3; continue _fun0015 }
case 166:
            var4 = var3.guild;
case 3:
            var6 = var5 != var4;
            var4 = undefined;
            if(!var6) { _fun0015_ip = 167; continue _fun0015 }
case 155:
            var6 = var3.guild;
            var4 = var6.id;
case 167:
            var1['location_guild_id'] = var4;
            var6 = var5 == var3;
            var4 = undefined;
            if(var6) { _fun0015_ip = 168; continue _fun0015 }
case 169:
            var4 = var3.channel;
case 168:
            var6 = var5 != var4;
            var4 = undefined;
            if(!var6) { _fun0015_ip = 156; continue _fun0015 }
case 141:
            var6 = var3.channel;
            var4 = var6.id;
case 156:
            var1['location_channel_id'] = var4;
            var6 = var5 == var3;
            var4 = undefined;
            if(var6) { _fun0015_ip = 170; continue _fun0015 }
case 171:
            var4 = var3.channel;
case 170:
            var4 = var5 != var4;
            var2 = undefined;
            if(!var4) { _fun0015_ip = 39; continue _fun0015 }
case 172:
            var3 = var3.channel;
            var2 = var3.type;
case 39:
            var1['location_channel_type'] = var2;
            return var1;
        }
    };
    var5['getInviteContext'] = var6;
    var6 = function createInvite(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0016_ip = 173; continue _fun0016 }
case 174:
            var3 = {};
case 173:
            var _closure2_slot1 = var3;
            var3 = arguments[2];
            var _closure2_slot2 = var3;
            var3 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0017_ip = 175; continue _fun0017 }
case 153:
                        var5 = undefined;
                        var2 = undefined;
                        var7 = undefined;
case 35: // try_start_0
                        var3 = {};
                        var12 = _closure2_slot1;
                        var13 = var3;
                        var4 = copyDataProperties(var13, var12);
                        var7 = var3;
                        var4 = var3.role_ids;
                        var2 = var4;
                        var3 = null;
                        var4 = var3 == var4;
                        var3 = undefined;
                        if(var4) { _fun0017_ip = 176; continue _fun0017 }
case 177:
                        var3 = var2.length;
case 176:
                        var2 = 0;
                        if(!(var2 === var3)) { _fun0017_ip = 138; continue _fun0017 }
case 178:
                        var2 = var7;
                        var2 = delete var2.role_ids;
case 138:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 45;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var6 = var2.HTTP;
                        var3 = var6.post;
                        var2 = {};
                        var11 = _closure1_slot24;
                        var10 = var11.INSTANT_INVITES;
                        var9 = _closure2_slot0;
                        var9 = var10.bind(var11)(var9);
                        var2['url'] = var9;
                        var2['body'] = var7;
                        var7 = {};
                        var9 = _closure2_slot2;
                        var7['location'] = var9;
                        var2['context'] = var7;
                        var7 = true;
                        var2['rejectWithError'] = var7;
                        var2 = var3.bind(var6)(var2);
                        SaveGenerator(address=166);
case 45:
                        return var2;
case 179:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0017_ip = 180; continue _fun0017 }
case 181:
                        var3 = var2.body;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var4 = 39;
                        var4 = var7[var4];
                        var7 = var6.bind(var5)(var4);
                        var6 = var7.dispatch;
                        var4 = {};
                        var9 = 'INSTANT_INVITE_CREATE_SUCCESS';
                        var4['type'] = var9;
                        var8 = _closure2_slot0;
                        var4['channelId'] = var8;
                        var4['invite'] = var3;
                        var4 = var6.bind(var7)(var4);
case 182: // try_end0
                        return var3;
case 180:
                        return var2;
case 183: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 39;
                        var2 = var6[var2];
                        var8 = var3.bind(var5)(var2);
                        var7 = var8.dispatch;
                        var2 = {};
                        var9 = 'INSTANT_INVITE_CREATE_FAILURE';
                        var2['type'] = var9;
                        var9 = _closure2_slot0;
                        var2['channelId'] = var9;
                        var2 = var7.bind(var8)(var2);
                        var2 = 46;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {constructor: {value: var2}});
                        var14 = var3;
                        var13 = var4;
                        var2 = new var14[var2](var13, var12);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
case 175:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var5['createInvite'] = var6;
    var6 = function mobileCreateInvite(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = this;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0018_ip = 143; continue _fun0018 }
case 153:
                    var6 = _closure1_slot18;
                    var5 = var6.getInvite;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var5 = var5.bind(var6)(var4);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0018_ip = 184; continue _fun0018 }
case 136:
                    var6 = var5.isExpired;
                    var6 = var6.bind(var5)();
                    if(var6) { _fun0018_ip = 184; continue _fun0018 }
case 46:
                    var5 = var5.code;
                    return var5;
case 184:
                    var8 = {};
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 47;
                    var5 = var5[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.Seconds;
                    var5 = var5.DAY;
                    var8['max_age'] = var5;
                    var7 = _closure2_slot2;
                    var6 = var7.createInvite;
                    var5 = _closure2_slot0;
                    var5 = var5.id;
                    var2 = _closure2_slot1;
                    var6 = var6.bind(var7)(var5, var8, var2);
                    var5 = var6.catch;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 39;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED';
                        var1['type'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=160);
case 185:
                    return var2;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0018_ip = 145; continue _fun0018 }
case 179:
                    var4 = var4 == var2;
                    var3 = undefined;
                    if(var4) { _fun0018_ip = 13; continue _fun0018 }
case 44:
                    var3 = var2.code;
case 13:
                    return var3;
case 145:
                    return var2;
case 143:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var5['mobileCreateInvite'] = var6;
    var6 = function getAllFriendInvites(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 186; continue _fun0019 }
case 187:
                    var3 = global;
                    var6 = var3.Promise;
                    var2 = var6.prototype;
                    var5 = Object.create(var2, {constructor: {value: var6}});
                    var15 = function(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 39;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.wait;
                        var1 = function() {
                            var3 = _closure5_slot0;
                            var2 = undefined;
                            var1 = null;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var16 = var5;
                    var2 = new var16[var6](var15, var14);
                    var2 = var2 instanceof Object ? var2 : var5;
                    SaveGenerator(address=49);
case 167:
                    return var2;
case 188:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0019_ip = 189; continue _fun0019 }
case 190:
                    var7 = _closure1_slot18;
                    var6 = var7.getFriendInvitesFetching;
                    var6 = var6.bind(var7)();
                    if(var6) { _fun0019_ip = 191; continue _fun0019 }
case 192:
                    var12 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var11 = 45;
                    var7 = var6[var11];
                    var10 = undefined;
                    var7 = var12.bind(var10)(var7);
                    var9 = var7.HTTP;
                    var8 = var9.get;
                    var7 = {};
                    var13 = _closure1_slot24;
                    var13 = var13.FRIEND_INVITES;
                    var7['url'] = var13;
                    var13 = {};
                    var14 = _closure2_slot0;
                    var13['location'] = var14;
                    var7['context'] = var13;
                    var11 = var6[var11];
                    var12 = var12.bind(var10)(var11);
                    var11 = var12.rejectWithMigratedError;
                    var11 = var11.bind(var12)();
                    var7['rejectWithError'] = var11;
                    var7 = var8.bind(var9)(var7);
                    _closure1_slot39 = var7;
                    var7 = _closure1_slot1;
                    var11 = 39;
                    var6 = var6[var11];
                    var8 = var7.bind(var10)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var9 = 'FRIEND_INVITES_FETCH_REQUEST';
                    var6['type'] = var9;
                    var9 = var3.Date;
                    var12 = var9.prototype;
                    var12 = Object.create(var12, {constructor: {value: var9}});
                    var16 = var12;
                    var9 = new var16[var9](var15);
                    var9 = var9 instanceof Object ? var9 : var12;
                    var6['requestedAt'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var6 = _closure1_slot39;
                    SaveGenerator(address=257);
case 193:
                    return var6;
case 194:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0019_ip = 195; continue _fun0019 }
case 196:
                    var7 = var6.body;
                    var8 = null;
                    _closure1_slot39 = var8;
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var8 = var8[var11];
                    var10 = var9.bind(var10)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'FRIEND_INVITES_FETCH_RESPONSE';
                    var8['type'] = var11;
                    var11 = var3.Date;
                    var12 = var11.prototype;
                    var12 = Object.create(var12, {constructor: {value: var11}});
                    var16 = var12;
                    var11 = new var16[var11](var15);
                    var11 = var11 instanceof Object ? var11 : var12;
                    var8['receivedAt'] = var11;
                    var8['invites'] = var7;
                    var8 = var9.bind(var10)(var8);
                    return var7;
case 195:
                    return var6;
case 191:
                    var7 = _closure1_slot39;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0019_ip = 197; continue _fun0019 }
case 198:
                    var7 = var3.Promise;
                    var6 = var7.reject;
                    var9 = var3.Error;
                    var3 = var9.prototype;
                    var8 = Object.create(var3, {constructor: {value: var9}});
                    var15 = 'Invalid friend invite fetch request';
                    var16 = var8;
                    var3 = new var16[var9](var15, var14);
                    var3 = var3 instanceof Object ? var3 : var8;
                    var3 = var6.bind(var7)(var3);
                    _fun0019_ip = 199; continue _fun0019;
case 197:
                    var6 = _closure1_slot39;
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.body;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4);
case 199:
                    return var3;
case 189:
                    return var2;
case 186:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var5['getAllFriendInvites'] = var6;
    var6 = function createFriendInvite(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var3 = 39;
            var3 = var2[var3];
            var7 = undefined;
            var8 = var4.bind(var7)(var3);
            var4 = var8.dispatch;
            var3 = {};
            var9 = 'FRIEND_INVITE_CREATE_REQUEST';
            var3['type'] = var9;
            var3 = var4.bind(var8)(var3);
            var3 = _closure1_slot0;
            var8 = 45;
            var2 = var2[var8];
            var2 = var3.bind(var7)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var9 = _closure1_slot24;
            var9 = var9.FRIEND_INVITES;
            var2['url'] = var9;
            var9 = null;
            if(!(var9 == var6)) { _fun0020_ip = 171; continue _fun0020 }
case 129:
            var6 = {};
case 171:
            var2['body'] = var6;
            var6 = {};
            var9 = arg2;
            var6['location'] = var9;
            var2['context'] = var6;
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var8];
            var6 = var6.bind(var7)(var5);
            var5 = var6.rejectWithMigratedError;
            var5 = var5.bind(var6)();
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.body;
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 39;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'FRIEND_INVITE_CREATE_SUCCESS';
                var2['type'] = var5;
                var2['invite'] = var1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 39;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'FRIEND_INVITE_CREATE_FAILURE';
                var2['type'] = var5;
                var2['error'] = var1;
                var2 = var3.bind(var4)(var2);
                throw var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5['createFriendInvite'] = var6;
    var6 = function revokeFriendInvites() {
        var2 = _closure1_slot1;
        var7 = _closure1_slot3;
        var1 = 39;
        var1 = var7[var1];
        var6 = undefined;
        var3 = var2.bind(var6)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'FRIEND_INVITE_REVOKE_REQUEST';
        var1['type'] = var4;
        var1 = var2.bind(var3)(var1);
        var5 = _closure1_slot0;
        var4 = 45;
        var1 = var7[var4];
        var1 = var5.bind(var6)(var1);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var8 = _closure1_slot24;
        var8 = var8.FRIEND_INVITES;
        var1['url'] = var8;
        var8 = {};
        var9 = global;
        var9 = var9.location;
        var8['location'] = var9;
        var1['context'] = var8;
        var4 = var7[var4];
        var5 = var5.bind(var6)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
        var1['rejectWithError'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            var1 = arg1;
            var5 = var1.body;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 39;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'FRIEND_INVITE_REVOKE_SUCCESS';
            var2['type'] = var6;
            var2['invites'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var5['revokeFriendInvites'] = var6;
    var6 = function revokeFriendInvite(arg1) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot3;
        var4 = 45;
        var1 = var7[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var10 = _closure1_slot24;
        var9 = var10.INVITE;
        var8 = arg1;
        var8 = var9.bind(var10)(var8);
        var1['url'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var5['revokeFriendInvite'] = var6;
    var6 = function fetchFriendMembers(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0021_ip = 61; continue _fun0021 }
case 153: // try_start_0
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var2 = 48;
                    var2 = var11[var2];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var2);
                    var4 = var6.get;
                    var2 = {};
                    var10 = _closure1_slot24;
                    var9 = var10.INVITE_FRIEND_MEMBERS;
                    var8 = _closure2_slot0;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var8 = {};
                    var10 = _closure1_slot0;
                    var9 = 49;
                    var9 = var11[var9];
                    var9 = var10.bind(var5)(var9);
                    var9 = var9.NetworkActionNames;
                    var9 = var9.INVITE_FRIEND_MEMBERS_FETCH;
                    var8['event'] = var9;
                    var9 = function properties(arg1) {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var6 = arg1;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 50;
                            var1 = var3[var1];
                            var8 = undefined;
                            var3 = var2.bind(var8)(var1);
                            var2 = var3.exact;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var1['code'] = var4;
                            var4 = null;
                            var7 = var4 == var6;
                            var5 = undefined;
                            if(var7) { _fun0022_ip = 200; continue _fun0022 }
case 190:
                            var6 = var6.body;
                            var7 = var4 == var6;
                            var5 = undefined;
                            if(var7) { _fun0022_ip = 200; continue _fun0022 }
case 161:
                            var6 = var6.friend_member_ids;
                            var7 = var4 == var6;
                            var5 = undefined;
                            if(var7) { _fun0022_ip = 200; continue _fun0022 }
case 156:
                            var5 = var6.length;
case 200:
                            var6 = var4 != var5;
                            var4 = 0;
                            if(!var6) { _fun0022_ip = 8; continue _fun0022 }
case 129:
                            var4 = var5;
case 8:
                            var1['friend_count'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var8['properties'] = var9;
                    var2['trackedActionData'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=135);
case 144:
                    return var2;
case 201:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0021_ip = 202; continue _fun0021 }
case 11:
                    var6 = var2.body;
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var3 = 39;
                    var3 = var8[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'INVITE_FRIEND_MEMBERS_FETCH_SUCCESS';
                    var3['type'] = var8;
                    var7 = _closure2_slot0;
                    var3['code'] = var7;
                    var6 = var6.friend_member_ids;
                    var3['friendMemberIds'] = var6;
                    var3 = var4.bind(var5)(var3);
case 148: // try_end0
                    _fun0021_ip = 23; continue _fun0021;
case 202:
                    return var2;
case 17: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 39;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'INVITE_FRIEND_MEMBERS_FETCH_FAILURE';
                    var2['type'] = var5;
                    var5 = _closure2_slot0;
                    var2['code'] = var5;
                    var2 = var3.bind(var4)(var2);
case 23:
                    var2 = undefined;
                    return var2;
case 61:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var5['fetchFriendMembers'] = var6;
    var6 = function clearInviteFromStore(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 39;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'INSTANT_INVITE_CLEAR';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var5['clearInviteFromStore'] = var6;
    var6 = function revokeInvite(arg1) {
        var10 = arg1;
        var11 = var10.code;
        var _closure2_slot0 = var11;
        var2 = var10.channel;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot1;
        var8 = _closure1_slot3;
        var2 = 48;
        var2 = var8[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.delete;
        var2 = {};
        var9 = _closure1_slot24;
        var5 = var9.INVITE;
        var5 = var5.bind(var9)(var11);
        var2['url'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var5 = {};
        var6 = _closure1_slot0;
        var9 = 49;
        var9 = var8[var9];
        var9 = var6.bind(var7)(var9);
        var9 = var9.NetworkActionNames;
        var9 = var9.INVITE_REVOKE;
        var5['event'] = var9;
        var9 = {};
        var11 = var10.uses;
        var9['uses'] = var11;
        var11 = var10.maxUses;
        var9['max_uses'] = var11;
        var11 = var10.maxAge;
        var9['max_age'] = var11;
        var10 = var10.type;
        var9['invite_type'] = var10;
        var5['properties'] = var9;
        var2['trackedActionData'] = var5;
        var5 = 45;
        var5 = var8[var5];
        var6 = var6.bind(var7)(var5);
        var5 = var6.rejectWithMigratedError;
        var5 = var5.bind(var6)();
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 39;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'INSTANT_INVITE_REVOKE_SUCCESS';
            var2['type'] = var5;
            var6 = _closure2_slot0;
            var2['code'] = var6;
            var5 = _closure2_slot1;
            var5 = var5.id;
            var2['channelId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var5['revokeInvite'] = var6;
    var6 = function acceptInvite(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var7 = var1.inviteKey;
            var _closure2_slot0 = var7;
            var12 = var1.context;
            var3 = var1.callback;
            var _closure2_slot1 = var3;
            var1 = var1.skipOnboarding;
            var _closure2_slot2 = var1;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var1 = this;
            var _closure2_slot7 = var1;
            var5 = _closure1_slot0;
            var1 = _closure1_slot3;
            var9 = 51;
            var1 = var1[var9];
            var5 = var5.bind(var4)(var1);
            var1 = var5.parseInviteCodeFromInviteKey;
            var16 = var1.bind(var5)(var7);
            var _closure2_slot8 = var16;
            var5 = _closure1_slot13;
            var1 = var5.getSessionId;
            var13 = var1.bind(var5)();
            var5 = _closure1_slot18;
            var1 = var5.getReceivedInstallationIdForInviteCode;
            var11 = var1.bind(var5)(var16);
            var _closure2_slot9 = var11;
            var5 = _closure1_slot19;
            var1 = var5.getInvite;
            var8 = var1.bind(var5)(var7);
            var5 = null;
            if(!(var5 == var8)) { _fun0023_ip = 203; continue _fun0023 }
case 204:
            var6 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var9];
            var6 = var6.bind(var4)(var1);
            var1 = var6.parseExtraDataFromInviteKey;
            var1 = var1.bind(var6)(var7);
            var6 = var1.guildScheduledEventId;
            _closure2_slot6 = var6;
            var9 = var1.targetChannelId;
            _closure2_slot4 = var9;
            var1 = var1.targetMessageId;
            _closure2_slot5 = var1;
            _fun0023_ip = 205; continue _fun0023;
case 203:
            var9 = var8.guild_scheduled_event;
            _closure2_slot3 = var9;
            var10 = var5 == var9;
            var1 = undefined;
            if(var10) { _fun0023_ip = 18; continue _fun0023 }
case 54:
            var1 = var9.id;
case 18:
            _closure2_slot6 = var1;
            var10 = var8.target_channel_id;
            var14 = var5 != var10;
            var9 = undefined;
            if(!var14) { _fun0023_ip = 206; continue _fun0023 }
case 20:
            var9 = var10;
case 206:
            _closure2_slot4 = var9;
            var9 = var8.target_message_id;
            var10 = var5 != var9;
            var8 = undefined;
            if(!var10) { _fun0023_ip = 207; continue _fun0023 }
case 22:
            var8 = var9;
case 207:
            _closure2_slot5 = var8;
            var6 = var1;
case 205:
            var10 = {};
            var18 = var10;
            var17 = var12;
            var1 = copyDataProperties(var18, var17);
            var1 = 'invite_guild_scheduled_event_id';
            var10[0] = var6;
            var6 = _closure1_slot23;
            var1 = var6.getCurrentUser;
            var9 = var1.bind(var6)();
            var6 = var5 == var9;
            var1 = undefined;
            if(var6) { _fun0023_ip = 208; continue _fun0023 }
case 209:
            var8 = var9.hasFlag;
            var6 = _closure1_slot31;
            var6 = var6.QUARANTINED;
            var1 = var8.bind(var9)(var6);
case 208:
            if(!(var5 != var1)) { _fun0023_ip = 210; continue _fun0023 }
case 211:
            if(var1) { _fun0023_ip = 212; continue _fun0023 }
case 210:
            var5 = _closure1_slot1;
            var9 = _closure1_slot3;
            var1 = 39;
            var1 = var9[var1];
            var6 = var5.bind(var4)(var1);
            var5 = var6.dispatch;
            var1 = {};
            var8 = 'INVITE_ACCEPT';
            var1['type'] = var8;
            var1['code'] = var7;
            var1 = var5.bind(var6)(var1);
            var8 = _closure1_slot0;
            var7 = 45;
            var1 = var9[var7];
            var1 = var8.bind(var4)(var1);
            var6 = var1.HTTP;
            var5 = var6.post;
            var1 = {};
            var15 = _closure1_slot24;
            var14 = var15.INVITE;
            var14 = var14.bind(var15)(var16);
            var1['url'] = var14;
            var1['context'] = var10;
            var10 = true;
            var1['oldFormErrors'] = var10;
            var10 = {};
            var10['session_id'] = var13;
            var12 = var12.invite_instance_id;
            var10['invite_instance_id'] = var12;
            var10['received_installation_id'] = var11;
            var1['body'] = var10;
            var7 = var9[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.rejectWithMigratedError;
            var7 = var7.bind(var8)();
            var1['rejectWithError'] = var7;
            var7 = var5.bind(var6)(var1);
            var6 = var7.then;
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0024_ip = 213; continue _fun0024 }
case 107:
                            var4 = _closure2_slot9;
                            var7 = null;
                            if(!(var7 != var4)) { _fun0024_ip = 214; continue _fun0024 }
case 109:
                            var6 = _closure2_slot7;
                            var5 = var6.clearReceivedInstallationIdForInviteCode;
                            var4 = _closure2_slot8;
                            var4 = var5.bind(var6)(var4);
case 214:
                            var8 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var4 = 39;
                            var4 = var5[var4];
                            var5 = undefined;
                            var9 = var8.bind(var5)(var4);
                            var8 = var9.dispatch;
                            var4 = {};
                            var10 = 'INVITE_ACCEPT_SUCCESS';
                            var4['type'] = var10;
                            var10 = var2.body;
                            var4['invite'] = var10;
                            var10 = _closure2_slot0;
                            var4['code'] = var10;
                            var4 = var8.bind(var9)(var4);
                            var4 = _closure2_slot3;
                            if(!(var7 == var4)) { _fun0024_ip = 41; continue _fun0024 }
case 215:
                            var9 = _closure1_slot6;
                            var8 = var9.getGuildScheduledEvent;
                            var4 = _closure2_slot6;
                            var9 = var8.bind(var9)(var4);
                            _fun0024_ip = 11; continue _fun0024;
case 41:
                            var9 = _closure2_slot3;
case 11:
                            var4 = {};
                            var15 = var2.body;
                            var16 = var4;
                            var8 = copyDataProperties(var16, var15);
                            var8 = 'guild_scheduled_event';
                            var4[7] = var9;
                            var8 = var2.body;
                            var9 = var8.target_channel_id;
                            if(!(var7 == var9)) { _fun0024_ip = 145; continue _fun0024 }
case 216:
                            var9 = _closure2_slot4;
case 145:
                            var8 = 'target_channel_id';
                            var4[7] = var9;
                            var8 = var2.body;
                            var9 = var8.target_message_id;
                            if(!(var7 == var9)) { _fun0024_ip = 217; continue _fun0024 }
case 148:
                            var9 = _closure2_slot5;
case 217:
                            var8 = 'target_message_id';
                            var4[7] = var9;
                            var8 = var7 == var4;
                            var10 = undefined;
                            if(var8) { _fun0024_ip = 218; continue _fun0024 }
case 219:
                            var10 = var4.guild_id;
case 218:
                            if(!(var7 == var10)) { _fun0024_ip = 220; continue _fun0024 }
case 54:
                            var9 = var7 == var4;
                            var8 = undefined;
                            if(var9) { _fun0024_ip = 221; continue _fun0024 }
case 222:
                            var9 = var4.guild;
                            var11 = var7 == var9;
                            var8 = undefined;
                            if(var11) { _fun0024_ip = 221; continue _fun0024 }
case 223:
                            var8 = var9.id;
case 221:
                            var10 = var8;
case 220:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var8 = 21;
                            var8 = var11[var8];
                            var12 = var9.bind(var5)(var8);
                            var11 = var12.hasFlag;
                            var8 = var4.flags;
                            var13 = var7 != var8;
                            var9 = 0;
                            if(!var13) { _fun0024_ip = 224; continue _fun0024 }
case 225:
                            var9 = var8;
case 224:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var8 = 22;
                            var8 = var14[var8];
                            var8 = var13.bind(var5)(var8);
                            var8 = var8.GuildInviteFlags;
                            var8 = var8.IS_GUEST_INVITE;
                            var8 = var11.bind(var12)(var9, var8);
                            var9 = _closure2_slot2;
                            if(var9) { _fun0024_ip = 226; continue _fun0024 }
case 70:
                            if(var8) { _fun0024_ip = 226; continue _fun0024 }
case 208:
                            if(!(var7 != var10)) { _fun0024_ip = 226; continue _fun0024 }
case 211:
                            var8 = var4.new_member;
                            if(!var8) { _fun0024_ip = 226; continue _fun0024 }
case 227:
                            var8 = var4.show_verification_form;
                            if(var8) { _fun0024_ip = 226; continue _fun0024 }
case 228:
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var8 = 27;
                            var8 = var6[var8];
                            var9 = var9.bind(var5)(var8);
                            var8 = 37;
                            var8 = var6[var8];
                            var6 = var6.paths;
                            var6 = var9.bind(var5)(var8, var6);
                            SaveGenerator(address=424);
case 229:
                            return var6;
case 230:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(var8) { _fun0024_ip = 29; continue _fun0024 }
case 231:
                            var9 = var6.default;
                            var8 = {};
                            var8['guildId'] = var10;
                            var8 = var9.bind(var5)(var8);
                            SaveGenerator(address=450);
case 232:
                            return var8;
case 233:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            if(!var9) { _fun0024_ip = 226; continue _fun0024 }
case 234:
                            return var8;
case 29:
                            return var6;
case 226:
                            var6 = _closure2_slot1;
                            if(!(var7 != var6)) { _fun0024_ip = 235; continue _fun0024 }
case 236:
                            var3 = _closure2_slot1;
                            var3 = var3.bind(var5)(var4);
case 235:
                            var2 = var2.body;
                            return var2;
case 213:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var5 = var1.bind(var4)();
            var1 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.body;
                    var8 = null;
                    var2 = var8 == var1;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0025_ip = 109; continue _fun0025 }
case 237:
                    var5 = var1.code;
case 109:
                    var2 = _closure1_slot33;
                    var2 = var2.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED;
                    if(!(var5 === var2)) { _fun0025_ip = 160; continue _fun0025 }
case 154:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 53;
                    var2 = var6[var2];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.openAgeGateModal;
                    var2 = _closure1_slot34;
                    var2 = var2.JOIN_LARGE_GUILD_UNDERAGE;
                    var2 = var5.bind(var6)(var2);
case 160:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 39;
                    var2 = var6[var2];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.dispatch;
                    var2 = {};
                    var7 = 'INVITE_ACCEPT_FAILURE';
                    var2['type'] = var7;
                    var7 = _closure2_slot0;
                    var2['code'] = var7;
                    var7 = {};
                    var10 = var3.body;
                    var11 = var8 == var10;
                    var9 = undefined;
                    if(var11) { _fun0025_ip = 238; continue _fun0025 }
case 239:
                    var9 = var10.message;
case 238:
                    var7['message'] = var9;
                    var9 = var3.body;
                    var10 = var8 == var9;
                    var8 = undefined;
                    if(var10) { _fun0025_ip = 240; continue _fun0025 }
case 241:
                    var8 = var9.code;
case 240:
                    var7['code'] = var8;
                    var2['error'] = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 54;
                    var1 = var5[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var13 = var2;
                    var12 = var3;
                    var1 = new var13[var1](var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var1 = var6.bind(var7)(var5, var1);
            _fun0023_ip = 242; continue _fun0023;
case 212:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 52;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var18 = function(arg1, arg2) {
                var1 = global;
                var1 = var1.Error;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var1 = new var5[var1](var4);
                var3 = var1 instanceof Object ? var1 : var2;
                var2 = arg2;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var19 = var3;
            var2 = new var19[var4](var18, var17);
            var1 = var2 instanceof Object ? var2 : var3;
case 242:
            return var1;
        }
    };
    var5['acceptInvite'] = var6;
    var6 = function acceptInviteAndTransitionToInviteChannel(arg1) {
        var1 = arg1;
        var3 = this;
        var7 = var1.inviteKey;
        var6 = var1.context;
        var2 = var1.analyticsLocations;
        var _closure2_slot0 = var2;
        var2 = var1.callback;
        var _closure2_slot1 = var2;
        var5 = var1.skipOnboarding;
        var1 = var1.autoJoin;
        var _closure2_slot2 = var1;
        var2 = var3.acceptInvite;
        var1 = {};
        var1['inviteKey'] = var7;
        var1['context'] = var6;
        var1['skipOnboarding'] = var5;
        var4 = function callback(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var3 = arg1;
                var1 = var3.channel;
                var4 = null;
                if(!(var4 != var1)) { _fun0026_ip = 200; continue _fun0026 }
case 36:
                var7 = {};
                var2 = _closure1_slot40;
                var6 = undefined;
                var11 = var2.bind(var6)(var3);
                var12 = var7;
                var2 = copyDataProperties(var12, var11);
                var5 = _closure2_slot2;
                var2 = 'autoJoin';
                var7[1] = var5;
                var5 = _closure1_slot43;
                var1 = var3.channel;
                var2 = var1.id;
                var1 = _closure2_slot0;
                if(!(var4 == var1)) { _fun0026_ip = 243; continue _fun0026 }
case 47:
                var1 = new Array(0);
                _fun0026_ip = 244; continue _fun0026;
case 243:
                var1 = _closure2_slot0;
case 244:
                var1 = var5.bind(var6)(var2, var7, var1);
case 200:
                var2 = _closure2_slot1;
                if(!(var4 != var2)) { _fun0026_ip = 51; continue _fun0026 }
case 171:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
case 51:
                var1 = undefined;
                return var1;
            }
        };
        var1['callback'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var5['acceptInviteAndTransitionToInviteChannel'] = var6;
    var6 = function transitionToInvite(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var4 = arg1;
            var12 = arguments[1];
            var1 = undefined;
            if(!(var12 === var1)) { _fun0027_ip = 36; continue _fun0027 }
case 187:
            var12 = {};
case 36:
            var11 = var12.transitionTo;
            var9 = var12.muteOnJoinVoiceChannel;
            var10 = var12.intent;
            var7 = var12.forceTransition;
            var3 = var4.channel;
            var6 = var4.guild;
            var13 = var4.inviter;
            var8 = null;
            if(!(var8 == var3)) { _fun0027_ip = 163; continue _fun0027 }
case 176:
            if(!(var8 == var6)) { _fun0027_ip = 163; continue _fun0027 }
case 245:
            if(!(var8 != var13)) { _fun0027_ip = 163; continue _fun0027 }
case 168:
            var15 = _closure1_slot21;
            var14 = var15.isFriend;
            var5 = var13.id;
            var14 = var14.bind(var15)(var5);
            var5 = null;
            if(!var14) { _fun0027_ip = 215; continue _fun0027 }
case 159:
            var15 = _closure1_slot14;
            var14 = var15.getDMFromUserId;
            var13 = var13.id;
            var5 = var14.bind(var15)(var13);
case 215:
            if(!(var8 != var5)) { _fun0027_ip = 246; continue _fun0027 }
case 247:
            var2 = _closure1_slot43;
            var2 = var2.bind(var1)(var5, var12);
            _fun0027_ip = 246; continue _fun0027;
case 163:
            if(!(var8 != var6)) { _fun0027_ip = 248; continue _fun0027 }
case 249:
            var13 = var6.features;
            if(!(var8 != var13)) { _fun0027_ip = 248; continue _fun0027 }
case 6:
            var12 = var13.includes;
            var5 = _closure1_slot29;
            var5 = var5.HUB;
            var5 = var12.bind(var13)(var5);
            if(var5) { _fun0027_ip = 250; continue _fun0027 }
case 248:
            var5 = var4.flags;
            var12 = var8 != var5;
            var13 = 0;
            if(!var12) { _fun0027_ip = 55; continue _fun0027 }
case 251:
            var13 = var5;
case 55:
            var17 = _closure1_slot0;
            var12 = _closure1_slot3;
            var14 = 21;
            var15 = var12[var14];
            var16 = var17.bind(var1)(var15);
            var15 = var16.hasFlag;
            var18 = 22;
            var12 = var12[var18];
            var12 = var17.bind(var1)(var12);
            var12 = var12.GuildInviteFlags;
            var12 = var12.IS_GUEST_INVITE;
            var12 = var15.bind(var16)(var13, var12);
            var16 = var13;
            if(var12) { _fun0027_ip = 252; continue _fun0027 }
case 196:
            var17 = _closure1_slot0;
            var13 = _closure1_slot3;
            var14 = var13[var14];
            var15 = var17.bind(var1)(var14);
            var14 = var15.hasFlag;
            var13 = var13[var18];
            var13 = var17.bind(var1)(var13);
            var13 = var13.GuildInviteFlags;
            var13 = var13.IS_APPLICATION_BYPASS;
            var12 = var14.bind(var15)(var16, var13);
case 252:
            if(!(var8 != var6)) { _fun0027_ip = 253; continue _fun0027 }
case 254:
            if(var12) { _fun0027_ip = 253; continue _fun0027 }
case 255:
            var12 = var4.new_member;
            if(!var12) { _fun0027_ip = 253; continue _fun0027 }
case 119:
            var13 = _closure1_slot0;
            var12 = _closure1_slot3;
            var14 = 56;
            var12 = var12[var14];
            var13 = var13.bind(var1)(var12);
            var12 = var13.inviteGuildHasPendingMemberDisabledVerification;
            var12 = var12.bind(var13)(var6);
            if(!var12) { _fun0027_ip = 253; continue _fun0027 }
case 256:
            var13 = _closure1_slot0;
            var12 = _closure1_slot3;
            var12 = var12[var14];
            var13 = var13.bind(var1)(var12);
            var12 = var13.openVerificationModalOrTransitionToApplication;
            var6 = var6.id;
            var6 = var12.bind(var13)(var6);
            _fun0027_ip = 246; continue _fun0027;
case 253:
            if(!(var8 != var3)) { _fun0027_ip = 246; continue _fun0027 }
case 257:
            var6 = _closure1_slot40;
            var6 = var6.bind(var1)(var4);
            if(!(var8 != var11)) { _fun0027_ip = 258; continue _fun0027 }
case 259:
            var6['transitionTo'] = var11;
case 258:
            if(!(var8 != var10)) { _fun0027_ip = 260; continue _fun0027 }
case 261:
            var6['intent'] = var10;
case 260:
            if(!(var8 != var9)) { _fun0027_ip = 186; continue _fun0027 }
case 199:
            var6['muteOnJoinVoiceChannel'] = var9;
case 186:
            if(!(var8 != var7)) { _fun0027_ip = 262; continue _fun0027 }
case 263:
            var6['forceTransition'] = var7;
case 262:
            var5 = _closure1_slot43;
            var3 = var3.id;
            var3 = var5.bind(var1)(var3, var6);
            _fun0027_ip = 246; continue _fun0027;
case 250:
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 55;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.onOpenHubInvite;
            var2 = var2.bind(var3)(var4);
case 246:
            return var1;
        }
    };
    var5['transitionToInvite'] = var6;
    var6 = function openNativeAppModal(arg1) {
        var4 = _closure1_slot0;
        var7 = _closure1_slot3;
        var1 = 51;
        var3 = var7[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.parseExtraDataFromInviteKey;
        var3 = arg1;
        var3 = var4.bind(var5)(var3);
        var6 = {};
        var5 = _closure1_slot13;
        var4 = var5.getInstallationForTracking;
        var4 = var4.bind(var5)();
        var6['installationId'] = var4;
        var4 = var3.targetChannelId;
        var6['targetChannelId'] = var4;
        var4 = var3.targetMessageId;
        var6['targetMessageId'] = var4;
        var4 = var3.guildScheduledEventId;
        var6['guildScheduledEventId'] = var4;
        var5 = _closure1_slot1;
        var4 = 57;
        var4 = var7[var4];
        var5 = var5.bind(var1)(var4);
        var4 = var5.openNativeAppModal;
        var3 = var3.baseCode;
        var2 = _closure1_slot28;
        var2 = var2.INVITE_BROWSER;
        var2 = var4.bind(var5)(var3, var2, var6);
        return var1;
    };
    var5['openNativeAppModal'] = var6;
    var6 = function transitionToInviteOnboarding(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var2 = arg1;
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0028_ip = 36; continue _fun0028 }
case 187:
            var3 = {};
case 36:
            var4 = var3.transitionTo;
            if(!(var1 === var4)) { _fun0028_ip = 264; continue _fun0028 }
case 265:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 25;
            var3 = var6[var3];
            var3 = var5.bind(var1)(var3);
            var4 = var3.transitionTo;
case 264:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var8 = 51;
            var3 = var3[var8];
            var7 = var6.bind(var1)(var3);
            var6 = var7.generateInviteKeyFromExtraData;
            var3 = {};
            var9 = var2.code;
            var3['baseCode'] = var9;
            var11 = var2.target_channel_id;
            var9 = null;
            var12 = var9 != var11;
            var10 = undefined;
            if(!var12) { _fun0028_ip = 51; continue _fun0028 }
case 266:
            var10 = var11;
case 51:
            var3['targetChannelId'] = var10;
            var11 = var2.target_message_id;
            var12 = var9 != var11;
            var10 = undefined;
            if(!var12) { _fun0028_ip = 41; continue _fun0028 }
case 267:
            var10 = var11;
case 41:
            var3['targetMessageId'] = var10;
            var10 = var2.guild_scheduled_event;
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0028_ip = 268; continue _fun0028 }
case 269:
            var9 = var10.id;
case 268:
            var3['guildScheduledEventId'] = var9;
            var7 = var6.bind(var7)(var3);
            var6 = _closure1_slot26;
            var3 = var6.APP_WITH_INVITE_AND_GUILD_ONBOARDING;
            var2 = var2.code;
            var3 = var3.bind(var6)(var2);
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var8];
            var6 = var6.bind(var1)(var5);
            var5 = var6.getInviteKeySearchSuffix;
            var5 = var5.bind(var6)(var7);
            var2['search'] = var5;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var5['transitionToInviteOnboarding'] = var6;
    var6 = function openApp(arg1, arg2, arg3, arg4, arg5) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var16 = arg3;
            var _closure2_slot0 = var5;
            var14 = null;
            var1 = var14 != var5;
            var15 = null;
            if(!var1) { _fun0029_ip = 270; continue _fun0029 }
case 109:
            var4 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.parseExtraDataFromInviteKey;
            var15 = var1.bind(var2)(var5);
case 270:
            var2 = var14 == var15;
            var1 = undefined;
            var12 = undefined;
            if(var2) { _fun0029_ip = 271; continue _fun0029 }
case 272:
            var12 = var15.baseCode;
case 271:
            var2 = var14 == var15;
            var10 = undefined;
            if(var2) { _fun0029_ip = 273; continue _fun0029 }
case 274:
            var10 = var15.targetMessageId;
case 273:
            var2 = var14 == var15;
            var11 = undefined;
            if(var2) { _fun0029_ip = 275; continue _fun0029 }
case 171:
            var11 = var15.targetChannelId;
case 275:
            var8 = _closure1_slot1;
            var7 = _closure1_slot3;
            var4 = 39;
            var9 = var7[var4];
            var17 = var8.bind(var1)(var9);
            var13 = var17.dispatch;
            var9 = {};
            var18 = 'INVITE_APP_OPENING';
            var9['type'] = var18;
            var9['code'] = var5;
            var9 = var13.bind(var17)(var9);
            var9 = 58;
            var7 = var7[var9];
            var7 = var8.bind(var1)(var7);
            var7 = var7.ua;
            if(!(var14 != var7)) { _fun0029_ip = 18; continue _fun0029 }
case 13:
            var8 = _closure1_slot1;
            var7 = _closure1_slot3;
            var7 = var7[var9];
            var7 = var8.bind(var1)(var7);
            var8 = var7.ua;
            var7 = var8.toLowerCase;
            var13 = var7.bind(var8)();
            var8 = var13.indexOf;
            var7 = 'googlebot';
            var8 = var8.bind(var13)(var7);
            var7 = -1;
            if(!(!(var8 > var7))) { _fun0029_ip = 276; continue _fun0029 }
case 18:
            var8 = _closure1_slot1;
            var7 = _closure1_slot3;
            var7 = var7[var9];
            var7 = var8.bind(var1)(var7);
            var7 = var7.os;
            var13 = var14 == var7;
            var8 = undefined;
            if(var13) { _fun0029_ip = 64; continue _fun0029 }
case 277:
            var8 = var7.family;
case 64:
            var7 = 'Android';
            if(!(var7 !== var8)) { _fun0029_ip = 236; continue _fun0029 }
case 205:
            var8 = _closure1_slot1;
            var7 = _closure1_slot3;
            var7 = var7[var9];
            var7 = var8.bind(var1)(var7);
            var7 = var7.os;
            var9 = var14 == var7;
            var8 = undefined;
            if(var9) { _fun0029_ip = 278; continue _fun0029 }
case 279:
            var8 = var7.family;
case 278:
            var7 = 'iOS';
            if(!(var7 !== var8)) { _fun0029_ip = 236; continue _fun0029 }
case 280:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var7 = 59;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.isTablet;
            if(var7) { _fun0029_ip = 236; continue _fun0029 }
case 71:
            var8 = var11;
            if(!(var14 != var6)) { _fun0029_ip = 281; continue _fun0029 }
case 282:
            var8 = var6;
case 281:
            var6 = var14 != var8;
            var9 = '';
            if(!var6) { _fun0029_ip = 283; continue _fun0029 }
case 121:
            var7 = _closure1_slot26;
            var6 = var7.INVITE_PROXY;
            var9 = var6.bind(var7)(var8, var10);
case 283:
            var6 = 0;
            var7 = var9[var6];
            var6 = '#';
            var8 = var9;
            if(!(var6 === var7)) { _fun0029_ip = 186; continue _fun0029 }
case 284:
            var7 = var9.slice;
            var6 = 1;
            var8 = var7.bind(var9)(var6);
case 186:
            var6 = global;
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = 'discord://';
            var8 = var7.bind(var6)(var8);
            _fun0029_ip = 285; continue _fun0029;
case 236:
            if(!(var14 == var12)) { _fun0029_ip = 286; continue _fun0029 }
case 287:
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 60;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getDefaultDynamicLinkTemplate;
            var9 = var6.bind(var7)();
            _fun0029_ip = 288; continue _fun0029;
case 286:
            var7 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 60;
            var6 = var13[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getInviteDynamicLinkTemplate;
            var9 = var6.bind(var7)(var12);
case 288:
            var13 = _closure1_slot0;
            var17 = _closure1_slot3;
            var6 = 61;
            var7 = var17[var6];
            var13 = var13.bind(var1)(var7);
            var7 = var13.generateAttemptId;
            var13 = var7.bind(var13)();
            var7 = _closure1_slot1;
            var6 = var17[var6];
            var7 = var7.bind(var1)(var6);
            var6 = {};
            var17 = 'friend_invite';
            var19 = 2;
            var18 = arg5;
            if(!(var19 !== var18)) { _fun0029_ip = 87; continue _fun0029 }
case 289:
            var17 = 'invite';
case 87:
            var6['utmSource'] = var17;
            var6['fingerprint'] = var16;
            var18 = _closure1_slot13;
            var17 = var18.getInstallationForTracking;
            var17 = var17.bind(var18)();
            var6['installationId'] = var17;
            var17 = arg4;
            var6['username'] = var17;
            var6['attemptId'] = var13;
            var17 = var14 == var15;
            var14 = undefined;
            if(var17) { _fun0029_ip = 290; continue _fun0029 }
case 90:
            var14 = var15.guildScheduledEventId;
case 290:
            var6['event'] = var14;
            var6['channel'] = var11;
            var6['message'] = var10;
            var10 = global;
            var10 = var10.HermesInternal;
            var11 = var10.concat;
            var10 = 'https://discord.com/api/download/mobile?invite_code=';
            var10 = var11.bind(var10)(var12);
            var6['iosFallbackLink'] = var10;
            var8 = var7.bind(var1)(var9, var6);
            var9 = _closure1_slot1;
            var17 = _closure1_slot3;
            var7 = 44;
            var7 = var17[var7];
            var11 = var9.bind(var1)(var7);
            var10 = var11.track;
            var7 = _closure1_slot30;
            var9 = var7.DEEP_LINK_CLICKED;
            var7 = {};
            var15 = _closure1_slot0;
            var14 = 62;
            var14 = var17[var14];
            var15 = var15.bind(var1)(var14);
            var14 = var15.maybeExtractId;
            var14 = var14.bind(var15)(var16);
            var7['fingerprint'] = var14;
            var7['attempt_id'] = var13;
            var13 = 'invite';
            var7['source'] = var13;
            var7['invite_code'] = var12;
            var7 = var10.bind(var11)(var9, var7);
case 285:
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var6 = 63;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.launch;
            var3 = function(arg1) {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 39;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var5 = {};
                    var2 = arg1;
                    if(var2) { _fun0030_ip = 245; continue _fun0030 }
case 38:
                    var2 = 'INVITE_APP_NOT_OPENED';
                    var5['type'] = var2;
                    var2 = _closure2_slot0;
                    var5['code'] = var2;
                    var2 = var5;
                    _fun0030_ip = 291; continue _fun0030;
case 245:
                    var6 = 'INVITE_APP_OPENED';
                    var5['type'] = var6;
                    var6 = _closure2_slot0;
                    var5['code'] = var6;
                    var2 = var5;
case 291:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var8, var3);
            _fun0029_ip = 292; continue _fun0029;
case 276:
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var2 = var2[var4];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'INVITE_APP_NOT_OPENED';
            var2['type'] = var6;
            var2['code'] = var5;
            var2 = var3.bind(var4)(var2);
case 292:
            return var1;
        }
    };
    var5['openApp'] = var6;
    var6 = function setReceivedInstallationIdForInviteCode(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 39;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET';
        var2['type'] = var5;
        var5 = arg1;
        var2['inviteCode'] = var5;
        var5 = arg2;
        var2['receivedInstallationId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var5['setReceivedInstallationIdForInviteCode'] = var6;
    var6 = function clearReceivedInstallationIdForInviteCode(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 39;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR';
        var2['type'] = var5;
        var5 = arg1;
        var2['inviteCode'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var5['clearReceivedInstallationIdForInviteCode'] = var6;
    var5['trackInviteServerClicked'] = var2;
    var6 = 64;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'actions/InstantInviteActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var5 = function transitionToGuildFromEventInvite() {
        var1 = undefined;
        var4 = _closure1_slot44;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['transitionToGuildFromEventInvite'] = var5;
    var4 = function trackInviteEmbedActioned(arg1, arg2) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var1 = arg1;
            var7 = arg2;
            var6 = var1.invite;
            var8 = var1.action;
            var14 = var1.inviter_id;
            var13 = var1.invite_message_id;
            var12 = var1.invite_instance_id;
            var11 = var1.application_id;
            var10 = var1.stream_key;
            var9 = var1.number_of_users_in_channel;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 44;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot30;
            var3 = var2.INVITE_EMBED_ACTIONED;
            var2 = {};
            var2['action'] = var8;
            var8 = var6.code;
            var2['invite_code'] = var8;
            var16 = var6.type;
            var6 = null;
            var15 = var6 == var16;
            var8 = undefined;
            if(var15) { _fun0031_ip = 293; continue _fun0031 }
case 39:
            var15 = var16.toString;
            var8 = var15.bind(var16)();
case 293:
            var2['invite_type'] = var8;
            var15 = var6 != var14;
            var8 = null;
            if(!var15) { _fun0031_ip = 238; continue _fun0031 }
case 294:
            var8 = var14;
case 238:
            var2['inviter_id'] = var8;
            var14 = var6 != var13;
            var8 = null;
            if(!var14) { _fun0031_ip = 165; continue _fun0031 }
case 295:
            var8 = var13;
case 165:
            var2['invite_message_id'] = var8;
            var13 = var6 != var12;
            var8 = null;
            if(!var13) { _fun0031_ip = 296; continue _fun0031 }
case 297:
            var8 = var12;
case 296:
            var2['invite_instance_id'] = var8;
            var12 = var6 != var11;
            var8 = null;
            if(!var12) { _fun0031_ip = 298; continue _fun0031 }
case 56:
            var8 = var11;
case 298:
            var2['application_id'] = var8;
            var11 = var6 != var10;
            var8 = null;
            if(!var11) { _fun0031_ip = 16; continue _fun0031 }
case 299:
            var8 = var10;
case 16:
            var2['stream_key'] = var8;
            var10 = var6 != var9;
            var8 = null;
            if(!var10) { _fun0031_ip = 54; continue _fun0031 }
case 300:
            var8 = var9;
case 54:
            var2['number_of_users_in_channel'] = var8;
            var8 = var6 != var7;
            var6 = null;
            if(!var8) { _fun0031_ip = 193; continue _fun0031 }
case 301:
            var6 = var7;
case 193:
            var2['location_stack'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackInviteEmbedActioned'] = var4;
    var3['trackInviteServerClicked'] = var2;
    return var1;
})();