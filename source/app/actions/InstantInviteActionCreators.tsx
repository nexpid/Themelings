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
            var9 = var1.guildId;
            var _closure2_slot0 = var9;
            var8 = var1.channel;
            var _closure2_slot1 = var8;
            var7 = var1.options;
            var _closure2_slot2 = var7;
            var11 = var1.analyticsLocations;
            var1 = undefined;
            if(!(var11 === var1)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var11 = new Array(0);
case 48:
            var _closure2_slot3 = var11;
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var1;
            var _closure2_slot6 = var1;
            var _closure2_slot7 = var1;
            var _closure2_slot8 = var1;
            var _closure2_slot9 = var1;
            var _closure2_slot10 = var1;
            var5 = _closure1_slot17;
            var4 = var5.getGuild;
            var5 = var4.bind(var5)(var9);
            var12 = null;
            var6 = var12 == var5;
            var4 = undefined;
            if(var6) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var10 = var5.features;
            var6 = var10.has;
            var5 = _closure1_slot29;
            var5 = var5.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var4 = var6.bind(var10)(var5);
case 50:
            var5 = var7;
            if(!(var12 == var5)) { _fun0004_ip = 52; continue _fun0004 }
case 53:
            var5 = {};
case 52:
            var6 = var5.targetUserId;
            _closure2_slot4 = var6;
            var15 = var5.targetType;
            _closure2_slot5 = var15;
            var13 = var5.targetApplicationId;
            _closure2_slot6 = var13;
            var6 = var5.isGuestInvite;
            _closure2_slot7 = var6;
            var5 = var5.isApplicationBypassInvite;
            if(var6) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            if(var5) { _fun0004_ip = 54; continue _fun0004 }
case 56:
            if(!(var12 != var7)) { _fun0004_ip = 57; continue _fun0004 }
case 15:
            var5 = var7.forceTransition;
            if(var5) { _fun0004_ip = 54; continue _fun0004 }
case 57:
            if(!var4) { _fun0004_ip = 54; continue _fun0004 }
case 17:
            var5 = _closure1_slot22;
            var4 = var5.getGuildId;
            var4 = var4.bind(var5)();
            if(!(var4 === var9)) { _fun0004_ip = 58; continue _fun0004 }
case 54:
            var10 = var8.type;
            var6 = _closure1_slot14;
            var5 = var6.getChannel;
            var4 = var8.id;
            var16 = var5.bind(var6)(var4);
            var4 = var12 == var7;
            var5 = undefined;
            if(var4) { _fun0004_ip = 23; continue _fun0004 }
case 59:
            var5 = var7.targetChannelId;
case 23:
            if(!(var12 != var5)) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            var6 = _closure1_slot14;
            var4 = var6.getChannel;
            var17 = var4.bind(var6)(var5);
            if(!(var12 != var17)) { _fun0004_ip = 60; continue _fun0004 }
case 62:
            var14 = _closure1_slot20;
            var6 = var14.can;
            var18 = _closure1_slot12;
            var4 = var17.type;
            var4 = var18.bind(var1)(var4);
            var4 = var6.bind(var14)(var4, var17);
            var14 = var5;
            if(var4) { _fun0004_ip = 63; continue _fun0004 }
case 60:
            var5 = var12 == var7;
            var4 = undefined;
            if(var5) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var4 = var7.targetType;
case 64:
            if(!(var12 == var4)) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var5 = _closure1_slot9;
            var4 = var8.type;
            var4 = var5.bind(var1)(var4);
            if(var4) { _fun0004_ip = 66; continue _fun0004 }
case 68:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var4 = 23;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.canSeeOnboardingHome;
            var4 = var4.bind(var5)(var9);
            if(!var4) { _fun0004_ip = 66; continue _fun0004 }
case 26:
            var4 = _closure1_slot35;
            var14 = var4.GUILD_HOME;
            _fun0004_ip = 63; continue _fun0004;
case 66:
            var6 = _closure1_slot14;
            var5 = var6.getChannel;
            var4 = var8.id;
            var17 = var5.bind(var6)(var4);
            var5 = _closure1_slot12;
            var4 = var8.type;
            var6 = var5.bind(var1)(var4);
            var5 = _closure1_slot20;
            var4 = var5.can;
            var4 = var4.bind(var5)(var6, var17);
            if(var4) { _fun0004_ip = 69; continue _fun0004 }
case 70:
            var17 = _closure1_slot15;
            var6 = var17.getDefaultChannel;
            var4 = _closure1_slot32;
            var5 = var4.CREATE_INSTANT_INVITE;
            var4 = true;
            var5 = var6.bind(var17)(var9, var4, var5);
            var6 = var12 == var5;
            var4 = undefined;
            if(var6) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var4 = var5.id;
case 71:
            if(!(var12 == var4)) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var4 = var8.id;
case 73:
            _fun0004_ip = 75; continue _fun0004;
case 69:
            var4 = var8.id;
case 75:
            var14 = var4;
case 63:
            _closure2_slot8 = var14;
            var4 = _closure1_slot25;
            var4 = var4.GUILD_STAGE_VOICE;
            var4 = var10 === var4;
            _closure2_slot9 = var4;
            var5 = var12 == var7;
            var4 = undefined;
            if(var5) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var4 = var7.targetChannelId;
case 76:
            var6 = var12 != var4;
            if(!var6) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var4 = var7.targetChannelId;
            var6 = var14 === var4;
case 78:
            var17 = undefined;
            if(!var6) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var5 = var12 == var7;
            var4 = undefined;
            if(var5) { _fun0004_ip = 82; continue _fun0004 }
case 83:
            var4 = var7.targetMessageId;
case 82:
            var17 = var4;
case 80:
            var5 = _closure1_slot26;
            var4 = var5.CHANNEL;
            var5 = var4.bind(var5)(var9, var14, var17);
            _closure2_slot10 = var5;
            var4 = var8.id;
            if(!(var14 === var4)) { _fun0004_ip = 84; continue _fun0004 }
case 85:
            var4 = _closure1_slot9;
            var4 = var4.bind(var1)(var10);
            if(!var4) { _fun0004_ip = 84; continue _fun0004 }
case 86:
            var4 = var12 == var7;
            var10 = undefined;
            if(var4) { _fun0004_ip = 87; continue _fun0004 }
case 88:
            var10 = var7.autoJoin;
case 87:
            var4 = false;
            if(!(var4 === var10)) { _fun0004_ip = 89; continue _fun0004 }
case 84:
            var10 = _closure1_slot0;
            var17 = _closure1_slot3;
            var4 = 36;
            var4 = var17[var4];
            var10 = var10.bind(var1)(var4);
            var4 = var10.isActivityInTextSupportedForChannel;
            var4 = var4.bind(var10)(var16);
            if(!var4) { _fun0004_ip = 90; continue _fun0004 }
case 91:
            var10 = _closure1_slot37;
            var10 = var10.EMBEDDED_APPLICATION;
            var4 = var15 === var10;
case 90:
            if(!var4) { _fun0004_ip = 92; continue _fun0004 }
case 93:
            var4 = var12 != var13;
case 92:
            if(!var4) { _fun0004_ip = 94; continue _fun0004 }
case 95:
            var10 = _closure1_slot0;
            var15 = _closure1_slot3;
            var4 = 25;
            var4 = var15[var4];
            var15 = var10.bind(var1)(var4);
            var10 = var15.transitionTo;
            var17 = _closure1_slot26;
            var16 = var17.CHANNEL;
            var4 = var9;
            if(!(var12 == var4)) { _fun0004_ip = 96; continue _fun0004 }
case 97:
            var4 = _closure1_slot27;
case 96:
            var4 = var16.bind(var17)(var4, var14);
            var4 = var10.bind(var15)(var4);
            var10 = _closure1_slot1;
            var15 = _closure1_slot3;
            var4 = 32;
            var4 = var15[var4];
            var10 = var10.bind(var1)(var4);
            var4 = {};
            var4['channelId'] = var14;
            var4['applicationId'] = var13;
            var14 = var12 == var7;
            var13 = undefined;
            if(var14) { _fun0004_ip = 98; continue _fun0004 }
case 99:
            var13 = var7.intent;
case 98:
            var4['intent'] = var13;
            var13 = var12 == var7;
            var12 = undefined;
            if(var13) { _fun0004_ip = 100; continue _fun0004 }
case 101:
            var12 = var7.inviterUserId;
case 100:
            var4['inviterUserId'] = var12;
            var4['analyticsLocations'] = var11;
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var11 = 33;
            var11 = var13[var11];
            var11 = var12.bind(var1)(var11);
            var11 = var11.CommandOrigin;
            var11 = var11.CHAT;
            var4['commandOrigin'] = var11;
            var4 = var10.bind(var1)(var4);
            _fun0004_ip = 94; continue _fun0004;
case 89:
            var10 = _closure1_slot5;
            var4 = function() {
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
                                if(var2) { _fun0006_ip = 102; continue _fun0006 }
case 103:
                                var2 = _closure2_slot2;
                                var7 = null;
                                var2 = var7 != var2;
                                if(!var2) { _fun0006_ip = 104; continue _fun0006 }
case 105:
                                var3 = _closure2_slot2;
                                var2 = var3.muteOnJoinVoiceChannel;
case 104:
                                if(!var2) { _fun0006_ip = 106; continue _fun0006 }
case 107:
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
case 106:
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
                                if(!var2) { _fun0006_ip = 108; continue _fun0006 }
case 109:
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
case 108:
                                var3 = _closure2_slot5;
                                var2 = _closure1_slot37;
                                var2 = var2.EMBEDDED_APPLICATION;
                                var2 = var3 === var2;
                                if(!var2) { _fun0006_ip = 110; continue _fun0006 }
case 111:
                                var3 = _closure2_slot6;
                                var2 = var7 != var3;
case 110:
                                if(!var2) { _fun0006_ip = 112; continue _fun0006 }
case 113:
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
                                if(!(var7 == var2)) { _fun0006_ip = 114; continue _fun0006 }
case 115:
                                var8 = _closure1_slot27;
                                _fun0006_ip = 116; continue _fun0006;
case 114:
                                var8 = _closure2_slot0;
case 116:
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
                                if(var8) { _fun0006_ip = 117; continue _fun0006 }
case 118:
                                var8 = _closure2_slot2;
                                var6 = var8.intent;
case 117:
                                var2['intent'] = var6;
                                var6 = _closure2_slot2;
                                var7 = var7 == var6;
                                var6 = undefined;
                                if(var7) { _fun0006_ip = 119; continue _fun0006 }
case 120:
                                var7 = _closure2_slot2;
                                var6 = var7.inviterUserId;
case 119:
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
case 112:
                                var2 = undefined;
                                return var2;
case 102:
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
                                if(var3) { _fun0006_ip = 121; continue _fun0006 }
case 122:
                                var7 = _closure1_slot10;
                                var3 = _closure2_slot1;
                                var3 = var7.bind(var4)(var3);
                                _fun0006_ip = 123; continue _fun0006;
case 121:
                                var3 = _closure2_slot1;
case 123:
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
                        if(var3) { _fun0005_ip = 124; continue _fun0005 }
case 125:
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
                        if(!var4) { _fun0005_ip = 124; continue _fun0005 }
case 126:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var3 = 35;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.openMemberVerificationModal;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var4)(var1, var2);
                        _fun0005_ip = 127; continue _fun0005;
case 124:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 127:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4 = var10.bind(var1)(var4);
case 94:
            if(!var6) { _fun0004_ip = 128; continue _fun0004 }
case 129:
            var4 = _closure1_slot27;
            if(!(var9 === var4)) { _fun0004_ip = 130; continue _fun0004 }
case 128:
            var4 = _closure1_slot41;
            var4 = var4.bind(var1)(var8, var7, var6);
            var4 = var4.bind(var1)(var5);
            _fun0004_ip = 58; continue _fun0004;
case 130:
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
case 58:
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
            if(!(var3 === var1)) { _fun0007_ip = 125; continue _fun0007 }
case 131:
            var3 = new Array(0);
case 125:
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
                    if(var1) { _fun0008_ip = 132; continue _fun0008 }
case 133:
                    var1 = var10 == var4;
case 132:
                    if(var1) { _fun0008_ip = 134; continue _fun0008 }
case 7:
                    var2 = var7.nsfw;
                    if(!var2) { _fun0008_ip = 135; continue _fun0008 }
case 136:
                    var4 = var4.nsfwAllowed;
                    var2 = !var4;
case 135:
                    if(var2) { _fun0008_ip = 137; continue _fun0008 }
case 138:
                    var4 = var7.isGuildVocalOrThread;
                    var4 = var4.bind(var7)();
                    if(!var4) { _fun0008_ip = 39; continue _fun0008 }
case 139:
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
case 137:
                    if(var2) { _fun0008_ip = 140; continue _fun0008 }
case 141:
                    var4 = var7.isGuildVocalOrThread;
                    var4 = var4.bind(var7)();
                    if(!var4) { _fun0008_ip = 142; continue _fun0008 }
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
case 142:
                    var2 = var4;
case 140:
                    var2 = !var2;
                    if(!var2) { _fun0008_ip = 143; continue _fun0008 }
case 144:
                    var4 = _closure2_slot1;
                    var6 = var10 == var4;
                    var5 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0008_ip = 145; continue _fun0008 }
case 146:
                    var6 = _closure2_slot1;
                    var4 = var6.guildScheduledEvent;
case 145:
                    if(!(var10 == var4)) { _fun0008_ip = 147; continue _fun0008 }
case 16:
                    var6 = _closure1_slot42;
                    var4 = {};
                    var8 = var7.getGuildId;
                    var8 = var8.bind(var7)();
                    if(!(var10 == var8)) { _fun0008_ip = 148; continue _fun0008 }
case 149:
                    var8 = _closure1_slot27;
case 148:
                    var4['guildId'] = var8;
                    var4['channel'] = var7;
                    var7 = _closure2_slot1;
                    var4['options'] = var7;
                    var7 = _closure2_slot2;
                    var4['analyticsLocations'] = var7;
                    var4 = var6.bind(var5)(var4);
                    var2 = false;
                    _fun0008_ip = 143; continue _fun0008;
case 147:
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
                            if(!(var2 != var3)) { _fun0009_ip = 132; continue _fun0009 }
case 150:
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
                                    if(!(var1 != var3)) { _fun0010_ip = 107; continue _fun0010 }
case 125:
                                    var1 = _closure4_slot1;
                                    var5['welcomeModalChannelId'] = var1;
case 107:
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
case 132:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var5)(var4);
                    var2 = false;
case 143:
                    var1 = var2;
case 134:
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
case 151:
                    var7 = var6.guild_id;
                    var4 = var6.channel_id;
                    var5 = _closure1_slot7;
                    var2 = undefined;
                    var5 = var5.bind(var2)(var6);
                    if(!var5) { _fun0011_ip = 152; continue _fun0011 }
case 153:
                    var5 = null;
                    if(!(var5 == var4)) { _fun0011_ip = 154; continue _fun0011 }
case 152:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 43;
                    var5 = var8[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.transitionToGuildSync;
                    var5 = var5.bind(var6)(var7);
                    SaveGenerator(address=78);
case 155:
                    return var5;
case 156:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!var6) { _fun0011_ip = 157; continue _fun0011 }
case 158:
                    return var5;
case 154:
                    var3 = _closure1_slot43;
                    var3 = var3.bind(var2)(var4);
case 157:
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
            if(!var8) { _fun0012_ip = 159; continue _fun0012 }
case 160:
            var6 = var7;
case 159:
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
            if(var7) { _fun0013_ip = 161; continue _fun0013 }
case 162:
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
                    if(!(var1 == var3)) { _fun0014_ip = 158; continue _fun0014 }
case 105:
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
                    _fun0014_ip = 161; continue _fun0014;
case 158:
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
case 161:
                    var1 = {};
                    var1['invite'] = var3;
                    var1['code'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            _fun0013_ip = 163; continue _fun0013;
case 161:
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
case 163:
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
case 164:
            var4 = var3.guild;
case 3:
            var6 = var5 != var4;
            var4 = undefined;
            if(!var6) { _fun0015_ip = 165; continue _fun0015 }
case 153:
            var6 = var3.guild;
            var4 = var6.id;
case 165:
            var1['location_guild_id'] = var4;
            var6 = var5 == var3;
            var4 = undefined;
            if(var6) { _fun0015_ip = 166; continue _fun0015 }
case 167:
            var4 = var3.channel;
case 166:
            var6 = var5 != var4;
            var4 = undefined;
            if(!var6) { _fun0015_ip = 154; continue _fun0015 }
case 138:
            var6 = var3.channel;
            var4 = var6.id;
case 154:
            var1['location_channel_id'] = var4;
            var6 = var5 == var3;
            var4 = undefined;
            if(var6) { _fun0015_ip = 168; continue _fun0015 }
case 169:
            var4 = var3.channel;
case 168:
            var4 = var5 != var4;
            var2 = undefined;
            if(!var4) { _fun0015_ip = 39; continue _fun0015 }
case 170:
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
            if(!(var3 === var2)) { _fun0016_ip = 171; continue _fun0016 }
case 172:
            var3 = {};
case 171:
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
                        if(var3) { _fun0017_ip = 173; continue _fun0017 }
case 151:
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
                        if(var4) { _fun0017_ip = 174; continue _fun0017 }
case 175:
                        var3 = var2.length;
case 174:
                        var2 = 0;
                        if(!(var2 === var3)) { _fun0017_ip = 135; continue _fun0017 }
case 176:
                        var2 = var7;
                        var2 = delete var2.role_ids;
case 135:
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
case 177:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0017_ip = 54; continue _fun0017 }
case 178:
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
case 179: // try_end0
                        return var3;
case 54:
                        return var2;
case 180: // catch_target0
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
case 173:
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
                    if(var2) { _fun0018_ip = 140; continue _fun0018 }
case 151:
                    var6 = _closure1_slot18;
                    var5 = var6.getInvite;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var5 = var5.bind(var6)(var4);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0018_ip = 181; continue _fun0018 }
case 133:
                    var6 = var5.isExpired;
                    var6 = var6.bind(var5)();
                    if(var6) { _fun0018_ip = 181; continue _fun0018 }
case 46:
                    var5 = var5.code;
                    return var5;
case 181:
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
case 182:
                    return var2;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0018_ip = 142; continue _fun0018 }
case 177:
                    var4 = var4 == var2;
                    var3 = undefined;
                    if(var4) { _fun0018_ip = 13; continue _fun0018 }
case 44:
                    var3 = var2.code;
case 13:
                    return var3;
case 142:
                    return var2;
case 140:
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
                    if(var2) { _fun0019_ip = 183; continue _fun0019 }
case 184:
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
case 165:
                    return var2;
case 185:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0019_ip = 186; continue _fun0019 }
case 187:
                    var7 = _closure1_slot18;
                    var6 = var7.getFriendInvitesFetching;
                    var6 = var6.bind(var7)();
                    if(var6) { _fun0019_ip = 188; continue _fun0019 }
case 189:
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
case 190:
                    return var6;
case 191:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0019_ip = 67; continue _fun0019 }
case 192:
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
case 67:
                    return var6;
case 188:
                    var7 = _closure1_slot39;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0019_ip = 193; continue _fun0019 }
case 194:
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
                    _fun0019_ip = 195; continue _fun0019;
case 193:
                    var6 = _closure1_slot39;
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.body;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4);
case 195:
                    return var3;
case 186:
                    return var2;
case 183:
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
            if(!(var9 == var6)) { _fun0020_ip = 169; continue _fun0020 }
case 126:
            var6 = {};
case 169:
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
                    if(var2) { _fun0021_ip = 196; continue _fun0021 }
case 151: // try_start_0
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
                            if(var7) { _fun0022_ip = 197; continue _fun0022 }
case 187:
                            var6 = var6.body;
                            var7 = var4 == var6;
                            var5 = undefined;
                            if(var7) { _fun0022_ip = 197; continue _fun0022 }
case 159:
                            var6 = var6.friend_member_ids;
                            var7 = var4 == var6;
                            var5 = undefined;
                            if(var7) { _fun0022_ip = 197; continue _fun0022 }
case 154:
                            var5 = var6.length;
case 197:
                            var6 = var4 != var5;
                            var4 = 0;
                            if(!var6) { _fun0022_ip = 8; continue _fun0022 }
case 126:
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
case 141:
                    return var2;
case 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0021_ip = 57; continue _fun0021 }
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
case 146: // try_end0
                    _fun0021_ip = 23; continue _fun0021;
case 57:
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
case 196:
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
            if(!(var5 == var8)) { _fun0023_ip = 198; continue _fun0023 }
case 199:
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
            _fun0023_ip = 62; continue _fun0023;
case 198:
            var9 = var8.guild_scheduled_event;
            _closure2_slot3 = var9;
            var10 = var5 == var9;
            var1 = undefined;
            if(var10) { _fun0023_ip = 18; continue _fun0023 }
case 108:
            var1 = var9.id;
case 18:
            _closure2_slot6 = var1;
            var10 = var8.target_channel_id;
            var14 = var5 != var10;
            var9 = undefined;
            if(!var14) { _fun0023_ip = 200; continue _fun0023 }
case 20:
            var9 = var10;
case 200:
            _closure2_slot4 = var9;
            var9 = var8.target_message_id;
            var10 = var5 != var9;
            var8 = undefined;
            if(!var10) { _fun0023_ip = 201; continue _fun0023 }
case 22:
            var8 = var9;
case 201:
            _closure2_slot5 = var8;
            var6 = var1;
case 62:
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
            if(var6) { _fun0023_ip = 202; continue _fun0023 }
case 203:
            var8 = var9.hasFlag;
            var6 = _closure1_slot31;
            var6 = var6.QUARANTINED;
            var1 = var8.bind(var9)(var6);
case 202:
            if(!(var5 != var1)) { _fun0023_ip = 204; continue _fun0023 }
case 205:
            if(var1) { _fun0023_ip = 206; continue _fun0023 }
case 204:
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
                            if(var3) { _fun0024_ip = 207; continue _fun0024 }
case 103:
                            var4 = _closure2_slot9;
                            var7 = null;
                            if(!(var7 != var4)) { _fun0024_ip = 208; continue _fun0024 }
case 105:
                            var6 = _closure2_slot7;
                            var5 = var6.clearReceivedInstallationIdForInviteCode;
                            var4 = _closure2_slot8;
                            var4 = var5.bind(var6)(var4);
case 208:
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
case 209:
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
                            if(!(var7 == var9)) { _fun0024_ip = 142; continue _fun0024 }
case 210:
                            var9 = _closure2_slot4;
case 142:
                            var8 = 'target_channel_id';
                            var4[7] = var9;
                            var8 = var2.body;
                            var9 = var8.target_message_id;
                            if(!(var7 == var9)) { _fun0024_ip = 211; continue _fun0024 }
case 146:
                            var9 = _closure2_slot5;
case 211:
                            var8 = 'target_message_id';
                            var4[7] = var9;
                            var8 = var7 == var4;
                            var10 = undefined;
                            if(var8) { _fun0024_ip = 212; continue _fun0024 }
case 213:
                            var10 = var4.guild_id;
case 212:
                            if(!(var7 == var10)) { _fun0024_ip = 214; continue _fun0024 }
case 108:
                            var9 = var7 == var4;
                            var8 = undefined;
                            if(var9) { _fun0024_ip = 59; continue _fun0024 }
case 215:
                            var9 = var4.guild;
                            var11 = var7 == var9;
                            var8 = undefined;
                            if(var11) { _fun0024_ip = 59; continue _fun0024 }
case 216:
                            var8 = var9.id;
case 59:
                            var10 = var8;
case 214:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var8 = 21;
                            var8 = var11[var8];
                            var12 = var9.bind(var5)(var8);
                            var11 = var12.hasFlag;
                            var8 = var4.flags;
                            var13 = var7 != var8;
                            var9 = 0;
                            if(!var13) { _fun0024_ip = 217; continue _fun0024 }
case 218:
                            var9 = var8;
case 217:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var8 = 22;
                            var8 = var14[var8];
                            var8 = var13.bind(var5)(var8);
                            var8 = var8.GuildInviteFlags;
                            var8 = var8.IS_GUEST_INVITE;
                            var8 = var11.bind(var12)(var9, var8);
                            var9 = _closure2_slot2;
                            if(var9) { _fun0024_ip = 219; continue _fun0024 }
case 220:
                            if(var8) { _fun0024_ip = 219; continue _fun0024 }
case 202:
                            if(!(var7 != var10)) { _fun0024_ip = 219; continue _fun0024 }
case 205:
                            var8 = var4.new_member;
                            if(!var8) { _fun0024_ip = 219; continue _fun0024 }
case 221:
                            var8 = var4.show_verification_form;
                            if(var8) { _fun0024_ip = 219; continue _fun0024 }
case 222:
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
case 223:
                            return var6;
case 224:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(var8) { _fun0024_ip = 29; continue _fun0024 }
case 225:
                            var9 = var6.default;
                            var8 = {};
                            var8['guildId'] = var10;
                            var8 = var9.bind(var5)(var8);
                            SaveGenerator(address=450);
case 226:
                            return var8;
case 227:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            if(!var9) { _fun0024_ip = 219; continue _fun0024 }
case 228:
                            return var8;
case 29:
                            return var6;
case 219:
                            var6 = _closure2_slot1;
                            if(!(var7 != var6)) { _fun0024_ip = 229; continue _fun0024 }
case 230:
                            var3 = _closure2_slot1;
                            var3 = var3.bind(var5)(var4);
case 229:
                            var2 = var2.body;
                            return var2;
case 207:
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
                    if(var2) { _fun0025_ip = 105; continue _fun0025 }
case 231:
                    var5 = var1.code;
case 105:
                    var2 = _closure1_slot33;
                    var2 = var2.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED;
                    if(!(var5 === var2)) { _fun0025_ip = 158; continue _fun0025 }
case 152:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 53;
                    var2 = var6[var2];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.openAgeGateModal;
                    var2 = _closure1_slot34;
                    var2 = var2.JOIN_LARGE_GUILD_UNDERAGE;
                    var2 = var5.bind(var6)(var2);
case 158:
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
                    if(var11) { _fun0025_ip = 232; continue _fun0025 }
case 233:
                    var9 = var10.message;
case 232:
                    var7['message'] = var9;
                    var9 = var3.body;
                    var10 = var8 == var9;
                    var8 = undefined;
                    if(var10) { _fun0025_ip = 234; continue _fun0025 }
case 235:
                    var8 = var9.code;
case 234:
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
            _fun0023_ip = 236; continue _fun0023;
case 206:
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
case 236:
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
                if(!(var4 != var1)) { _fun0026_ip = 197; continue _fun0026 }
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
                if(!(var4 == var1)) { _fun0026_ip = 237; continue _fun0026 }
case 47:
                var1 = new Array(0);
                _fun0026_ip = 238; continue _fun0026;
case 237:
                var1 = _closure2_slot0;
case 238:
                var1 = var5.bind(var6)(var2, var7, var1);
case 197:
                var2 = _closure2_slot1;
                if(!(var4 != var2)) { _fun0026_ip = 239; continue _fun0026 }
case 169:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
case 239:
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
case 184:
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
            if(!(var8 == var3)) { _fun0027_ip = 161; continue _fun0027 }
case 174:
            if(!(var8 == var6)) { _fun0027_ip = 161; continue _fun0027 }
case 240:
            if(!(var8 != var13)) { _fun0027_ip = 161; continue _fun0027 }
case 166:
            var15 = _closure1_slot21;
            var14 = var15.isFriend;
            var5 = var13.id;
            var14 = var14.bind(var15)(var5);
            var5 = null;
            if(!var14) { _fun0027_ip = 209; continue _fun0027 }
case 157:
            var15 = _closure1_slot14;
            var14 = var15.getDMFromUserId;
            var13 = var13.id;
            var5 = var14.bind(var15)(var13);
case 209:
            if(!(var8 != var5)) { _fun0027_ip = 241; continue _fun0027 }
case 242:
            var2 = _closure1_slot43;
            var2 = var2.bind(var1)(var5, var12);
            _fun0027_ip = 241; continue _fun0027;
case 161:
            if(!(var8 != var6)) { _fun0027_ip = 243; continue _fun0027 }
case 53:
            var13 = var6.features;
            if(!(var8 != var13)) { _fun0027_ip = 243; continue _fun0027 }
case 6:
            var12 = var13.includes;
            var5 = _closure1_slot29;
            var5 = var5.HUB;
            var5 = var12.bind(var13)(var5);
            if(var5) { _fun0027_ip = 244; continue _fun0027 }
case 243:
            var5 = var4.flags;
            var12 = var8 != var5;
            var13 = 0;
            if(!var12) { _fun0027_ip = 245; continue _fun0027 }
case 246:
            var13 = var5;
case 245:
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
            if(var12) { _fun0027_ip = 247; continue _fun0027 }
case 192:
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
case 247:
            if(!(var8 != var6)) { _fun0027_ip = 248; continue _fun0027 }
case 249:
            if(var12) { _fun0027_ip = 248; continue _fun0027 }
case 250:
            var12 = var4.new_member;
            if(!var12) { _fun0027_ip = 248; continue _fun0027 }
case 116:
            var13 = _closure1_slot0;
            var12 = _closure1_slot3;
            var14 = 56;
            var12 = var12[var14];
            var13 = var13.bind(var1)(var12);
            var12 = var13.inviteGuildHasPendingMemberDisabledVerification;
            var12 = var12.bind(var13)(var6);
            if(!var12) { _fun0027_ip = 248; continue _fun0027 }
case 251:
            var13 = _closure1_slot0;
            var12 = _closure1_slot3;
            var12 = var12[var14];
            var13 = var13.bind(var1)(var12);
            var12 = var13.openVerificationModalOrTransitionToApplication;
            var6 = var6.id;
            var6 = var12.bind(var13)(var6);
            _fun0027_ip = 241; continue _fun0027;
case 248:
            if(!(var8 != var3)) { _fun0027_ip = 241; continue _fun0027 }
case 252:
            var6 = _closure1_slot40;
            var6 = var6.bind(var1)(var4);
            if(!(var8 != var11)) { _fun0027_ip = 253; continue _fun0027 }
case 66:
            var6['transitionTo'] = var11;
case 253:
            if(!(var8 != var10)) { _fun0027_ip = 254; continue _fun0027 }
case 255:
            var6['intent'] = var10;
case 254:
            if(!(var8 != var9)) { _fun0027_ip = 183; continue _fun0027 }
case 195:
            var6['muteOnJoinVoiceChannel'] = var9;
case 183:
            if(!(var8 != var7)) { _fun0027_ip = 256; continue _fun0027 }
case 257:
            var6['forceTransition'] = var7;
case 256:
            var5 = _closure1_slot43;
            var3 = var3.id;
            var3 = var5.bind(var1)(var3, var6);
            _fun0027_ip = 241; continue _fun0027;
case 244:
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 55;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.onOpenHubInvite;
            var2 = var2.bind(var3)(var4);
case 241:
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
case 184:
            var3 = {};
case 36:
            var4 = var3.transitionTo;
            if(!(var1 === var4)) { _fun0028_ip = 258; continue _fun0028 }
case 259:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 25;
            var3 = var6[var3];
            var3 = var5.bind(var1)(var3);
            var4 = var3.transitionTo;
case 258:
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
            if(!var12) { _fun0028_ip = 239; continue _fun0028 }
case 260:
            var10 = var11;
case 239:
            var3['targetChannelId'] = var10;
            var11 = var2.target_message_id;
            var12 = var9 != var11;
            var10 = undefined;
            if(!var12) { _fun0028_ip = 41; continue _fun0028 }
case 261:
            var10 = var11;
case 41:
            var3['targetMessageId'] = var10;
            var10 = var2.guild_scheduled_event;
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0028_ip = 262; continue _fun0028 }
case 263:
            var9 = var10.id;
case 262:
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
            if(!var1) { _fun0029_ip = 264; continue _fun0029 }
case 105:
            var4 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.parseExtraDataFromInviteKey;
            var15 = var1.bind(var2)(var5);
case 264:
            var2 = var14 == var15;
            var1 = undefined;
            var12 = undefined;
            if(var2) { _fun0029_ip = 265; continue _fun0029 }
case 266:
            var12 = var15.baseCode;
case 265:
            var2 = var14 == var15;
            var10 = undefined;
            if(var2) { _fun0029_ip = 267; continue _fun0029 }
case 268:
            var10 = var15.targetMessageId;
case 267:
            var2 = var14 == var15;
            var11 = undefined;
            if(var2) { _fun0029_ip = 51; continue _fun0029 }
case 169:
            var11 = var15.targetChannelId;
case 51:
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
            if(!(!(var8 > var7))) { _fun0029_ip = 269; continue _fun0029 }
case 18:
            var8 = _closure1_slot1;
            var7 = _closure1_slot3;
            var7 = var7[var9];
            var7 = var8.bind(var1)(var7);
            var7 = var7.os;
            var13 = var14 == var7;
            var8 = undefined;
            if(var13) { _fun0029_ip = 270; continue _fun0029 }
case 271:
            var8 = var7.family;
case 270:
            var7 = 'Android';
            if(!(var7 !== var8)) { _fun0029_ip = 230; continue _fun0029 }
case 62:
            var8 = _closure1_slot1;
            var7 = _closure1_slot3;
            var7 = var7[var9];
            var7 = var8.bind(var1)(var7);
            var7 = var7.os;
            var9 = var14 == var7;
            var8 = undefined;
            if(var9) { _fun0029_ip = 272; continue _fun0029 }
case 273:
            var8 = var7.family;
case 272:
            var7 = 'iOS';
            if(!(var7 !== var8)) { _fun0029_ip = 230; continue _fun0029 }
case 274:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var7 = 59;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.isTablet;
            if(var7) { _fun0029_ip = 230; continue _fun0029 }
case 275:
            var8 = var11;
            if(!(var14 != var6)) { _fun0029_ip = 276; continue _fun0029 }
case 277:
            var8 = var6;
case 276:
            var6 = var14 != var8;
            var9 = '';
            if(!var6) { _fun0029_ip = 278; continue _fun0029 }
case 118:
            var7 = _closure1_slot26;
            var6 = var7.INVITE_PROXY;
            var9 = var6.bind(var7)(var8, var10);
case 278:
            var6 = 0;
            var7 = var9[var6];
            var6 = '#';
            var8 = var9;
            if(!(var6 === var7)) { _fun0029_ip = 183; continue _fun0029 }
case 279:
            var7 = var9.slice;
            var6 = 1;
            var8 = var7.bind(var9)(var6);
case 183:
            var6 = global;
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = 'discord://';
            var8 = var7.bind(var6)(var8);
            _fun0029_ip = 280; continue _fun0029;
case 230:
            if(!(var14 == var12)) { _fun0029_ip = 281; continue _fun0029 }
case 282:
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 60;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getDefaultDynamicLinkTemplate;
            var9 = var6.bind(var7)();
            _fun0029_ip = 283; continue _fun0029;
case 281:
            var7 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 60;
            var6 = var13[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getInviteDynamicLinkTemplate;
            var9 = var6.bind(var7)(var12);
case 283:
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
            if(!(var19 !== var18)) { _fun0029_ip = 284; continue _fun0029 }
case 285:
            var17 = 'invite';
case 284:
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
            if(var17) { _fun0029_ip = 286; continue _fun0029 }
case 287:
            var14 = var15.guildScheduledEventId;
case 286:
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
case 280:
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
                    if(var2) { _fun0030_ip = 240; continue _fun0030 }
case 38:
                    var2 = 'INVITE_APP_NOT_OPENED';
                    var5['type'] = var2;
                    var2 = _closure2_slot0;
                    var5['code'] = var2;
                    var2 = var5;
                    _fun0030_ip = 288; continue _fun0030;
case 240:
                    var6 = 'INVITE_APP_OPENED';
                    var5['type'] = var6;
                    var6 = _closure2_slot0;
                    var5['code'] = var6;
                    var2 = var5;
case 288:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var8, var3);
            _fun0029_ip = 289; continue _fun0029;
case 269:
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
case 289:
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
            if(var15) { _fun0031_ip = 290; continue _fun0031 }
case 39:
            var15 = var16.toString;
            var8 = var15.bind(var16)();
case 290:
            var2['invite_type'] = var8;
            var15 = var6 != var14;
            var8 = null;
            if(!var15) { _fun0031_ip = 232; continue _fun0031 }
case 291:
            var8 = var14;
case 232:
            var2['inviter_id'] = var8;
            var14 = var6 != var13;
            var8 = null;
            if(!var14) { _fun0031_ip = 163; continue _fun0031 }
case 292:
            var8 = var13;
case 163:
            var2['invite_message_id'] = var8;
            var13 = var6 != var12;
            var8 = null;
            if(!var13) { _fun0031_ip = 293; continue _fun0031 }
case 294:
            var8 = var12;
case 293:
            var2['invite_instance_id'] = var8;
            var12 = var6 != var11;
            var8 = null;
            if(!var12) { _fun0031_ip = 295; continue _fun0031 }
case 296:
            var8 = var11;
case 295:
            var2['application_id'] = var8;
            var11 = var6 != var10;
            var8 = null;
            if(!var11) { _fun0031_ip = 16; continue _fun0031 }
case 297:
            var8 = var10;
case 16:
            var2['stream_key'] = var8;
            var10 = var6 != var9;
            var8 = null;
            if(!var10) { _fun0031_ip = 108; continue _fun0031 }
case 298:
            var8 = var9;
case 108:
            var2['number_of_users_in_channel'] = var8;
            var8 = var6 != var7;
            var6 = null;
            if(!var8) { _fun0031_ip = 190; continue _fun0031 }
case 299:
            var6 = var7;
case 190:
            var2['location_stack'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackInviteEmbedActioned'] = var4;
    var3['trackInviteServerClicked'] = var2;
    return var1;
})();