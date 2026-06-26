// app/actions/InstantInviteActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var8;
    var1 = function generateAcceptInviteOptions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var4 = var2.target_type;
            var3 = _closure1_slot36;
            var3 = var3.STREAM;
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot36;
            var3 = var3.EMBEDDED_APPLICATION;
            if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot36;
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
            var10 = 20;
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
            var11 = 21;
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
    var _closure1_slot39 = var1;
    var1 = function transitionToInviteChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.guildId;
            var _closure2_slot0 = var7;
            var5 = var1.channel;
            var _closure2_slot1 = var5;
            var4 = var1.options;
            var _closure2_slot2 = var4;
            var9 = var1.analyticsLocations;
            var1 = undefined;
            if(!(var9 === var1)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var9 = new Array(0);
case 35:
            var _closure2_slot3 = var9;
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var1;
            var _closure2_slot6 = var1;
            var _closure2_slot7 = var1;
            var _closure2_slot8 = var1;
            var _closure2_slot9 = var1;
            var _closure2_slot10 = var1;
            var8 = _closure1_slot17;
            var3 = var8.getGuild;
            var8 = var3.bind(var8)(var7);
            var10 = null;
            var11 = var10 == var8;
            var3 = undefined;
            if(var11) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var12 = var8.features;
            var11 = var12.has;
            var8 = _closure1_slot28;
            var8 = var8.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var3 = var11.bind(var12)(var8);
case 37:
            var8 = var4;
            if(!(var10 == var8)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var8 = {};
case 39:
            var11 = var8.targetUserId;
            _closure2_slot4 = var11;
            var14 = var8.targetType;
            _closure2_slot5 = var14;
            var11 = var8.targetApplicationId;
            _closure2_slot6 = var11;
            var12 = var8.isGuestInvite;
            _closure2_slot7 = var12;
            var8 = var8.isApplicationBypassInvite;
            if(var12) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            if(var8) { _fun0002_ip = 41; continue _fun0002 }
case 43:
            if(!(var10 != var4)) { _fun0002_ip = 44; continue _fun0002 }
case 15:
            var8 = var4.forceTransition;
            if(var8) { _fun0002_ip = 41; continue _fun0002 }
case 44:
            if(!var3) { _fun0002_ip = 41; continue _fun0002 }
case 17:
            var8 = _closure1_slot21;
            var3 = var8.getGuildId;
            var3 = var3.bind(var8)();
            if(!(var3 === var7)) { _fun0002_ip = 45; continue _fun0002 }
case 41:
            var13 = var5.type;
            var12 = _closure1_slot14;
            var8 = var12.getChannel;
            var3 = var5.id;
            var15 = var8.bind(var12)(var3);
            var3 = var10 == var4;
            var8 = undefined;
            if(var3) { _fun0002_ip = 23; continue _fun0002 }
case 46:
            var8 = var4.targetChannelId;
case 23:
            if(!(var10 != var8)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var12 = _closure1_slot14;
            var3 = var12.getChannel;
            var17 = var3.bind(var12)(var8);
            if(!(var10 != var17)) { _fun0002_ip = 47; continue _fun0002 }
case 49:
            var16 = _closure1_slot20;
            var12 = var16.can;
            var18 = _closure1_slot12;
            var3 = var17.type;
            var3 = var18.bind(var1)(var3);
            var3 = var12.bind(var16)(var3, var17);
            var12 = var8;
            if(var3) { _fun0002_ip = 50; continue _fun0002 }
case 47:
            var8 = var10 == var4;
            var3 = undefined;
            if(var8) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var3 = var4.targetType;
case 51:
            if(!(var10 == var3)) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var8 = _closure1_slot9;
            var3 = var5.type;
            var3 = var8.bind(var1)(var3);
            if(var3) { _fun0002_ip = 53; continue _fun0002 }
case 55:
            var8 = _closure1_slot0;
            var16 = _closure1_slot3;
            var3 = 22;
            var3 = var16[var3];
            var8 = var8.bind(var1)(var3);
            var3 = var8.canSeeOnboardingHome;
            var3 = var3.bind(var8)(var7);
            if(!var3) { _fun0002_ip = 53; continue _fun0002 }
case 26:
            var3 = _closure1_slot34;
            var12 = var3.GUILD_HOME;
            _fun0002_ip = 50; continue _fun0002;
case 53:
            var16 = _closure1_slot14;
            var8 = var16.getChannel;
            var3 = var5.id;
            var17 = var8.bind(var16)(var3);
            var8 = _closure1_slot12;
            var3 = var5.type;
            var16 = var8.bind(var1)(var3);
            var8 = _closure1_slot20;
            var3 = var8.can;
            var3 = var3.bind(var8)(var16, var17);
            if(var3) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var17 = _closure1_slot15;
            var16 = var17.getDefaultChannel;
            var3 = _closure1_slot31;
            var8 = var3.CREATE_INSTANT_INVITE;
            var3 = true;
            var8 = var16.bind(var17)(var7, var3, var8);
            var16 = var10 == var8;
            var3 = undefined;
            if(var16) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var3 = var8.id;
case 58:
            if(!(var10 == var3)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var3 = var5.id;
case 60:
            _fun0002_ip = 62; continue _fun0002;
case 56:
            var3 = var5.id;
case 62:
            var12 = var3;
case 50:
            _closure2_slot8 = var12;
            var3 = _closure1_slot24;
            var3 = var3.GUILD_STAGE_VOICE;
            var3 = var13 === var3;
            _closure2_slot9 = var3;
            var8 = var10 == var4;
            var3 = undefined;
            if(var8) { _fun0002_ip = 63; continue _fun0002 }
case 64:
            var3 = var4.targetChannelId;
case 63:
            var16 = undefined;
            if(!(var12 === var3)) { _fun0002_ip = 65; continue _fun0002 }
case 66:
            var8 = var10 == var4;
            var3 = undefined;
            if(var8) { _fun0002_ip = 67; continue _fun0002 }
case 68:
            var3 = var4.targetMessageId;
case 67:
            var16 = var3;
case 65:
            var8 = _closure1_slot25;
            var3 = var8.CHANNEL;
            var3 = var3.bind(var8)(var7, var12, var16);
            _closure2_slot10 = var3;
            var8 = var5.id;
            if(!(var12 === var8)) { _fun0002_ip = 69; continue _fun0002 }
case 70:
            var8 = _closure1_slot9;
            var8 = var8.bind(var1)(var13);
            if(!var8) { _fun0002_ip = 69; continue _fun0002 }
case 71:
            var8 = var10 == var4;
            var13 = undefined;
            if(var8) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var13 = var4.autoJoin;
case 72:
            var8 = false;
            if(!(var8 === var13)) { _fun0002_ip = 74; continue _fun0002 }
case 69:
            var13 = _closure1_slot0;
            var16 = _closure1_slot3;
            var8 = 35;
            var8 = var16[var8];
            var13 = var13.bind(var1)(var8);
            var8 = var13.isActivityInTextSupportedForChannel;
            var8 = var8.bind(var13)(var15);
            if(!var8) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var13 = _closure1_slot36;
            var13 = var13.EMBEDDED_APPLICATION;
            var8 = var14 === var13;
case 75:
            if(!var8) { _fun0002_ip = 77; continue _fun0002 }
case 78:
            var8 = var10 != var11;
case 77:
            if(!var8) { _fun0002_ip = 79; continue _fun0002 }
case 80:
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var8 = 24;
            var8 = var14[var8];
            var13 = var13.bind(var1)(var8);
            var8 = var13.transitionTo;
            var15 = _closure1_slot25;
            var14 = var15.CHANNEL;
            if(!(var10 == var7)) { _fun0002_ip = 81; continue _fun0002 }
case 82:
            var7 = _closure1_slot26;
case 81:
            var7 = var14.bind(var15)(var7, var12);
            var7 = var8.bind(var13)(var7);
            var8 = _closure1_slot1;
            var13 = _closure1_slot3;
            var7 = 31;
            var7 = var13[var7];
            var8 = var8.bind(var1)(var7);
            var7 = {};
            var7['channelId'] = var12;
            var7['applicationId'] = var11;
            var12 = var10 == var4;
            var11 = undefined;
            if(var12) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var11 = var4.intent;
case 83:
            var7['intent'] = var11;
            var11 = var10 == var4;
            var10 = undefined;
            if(var11) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            var10 = var4.inviterUserId;
case 85:
            var7['inviterUserId'] = var10;
            var7['analyticsLocations'] = var9;
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var9 = 32;
            var9 = var11[var9];
            var9 = var10.bind(var1)(var9);
            var9 = var9.CommandOrigin;
            var9 = var9.CHAT;
            var7['commandOrigin'] = var9;
            var7 = var8.bind(var1)(var7);
            _fun0002_ip = 79; continue _fun0002;
case 74:
            var7 = _closure1_slot5;
            var6 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 26;
                var3 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = 25;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = arg1;
                        var2 = var2.default;
                        var _closure4_slot0 = var2;
                        var2 = function connect() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var2 = _closure2_slot9;
                                if(var2) { _fun0004_ip = 87; continue _fun0004 }
case 88:
                                var2 = _closure2_slot2;
                                var7 = null;
                                var2 = var7 != var2;
                                if(!var2) { _fun0004_ip = 89; continue _fun0004 }
case 90:
                                var3 = _closure2_slot2;
                                var2 = var3.muteOnJoinVoiceChannel;
case 89:
                                if(!var2) { _fun0004_ip = 91; continue _fun0004 }
case 92:
                                var4 = _closure1_slot1;
                                var8 = _closure1_slot3;
                                var3 = 28;
                                var3 = var8[var3];
                                var6 = undefined;
                                var5 = var4.bind(var6)(var3);
                                var4 = var5.setSelfMute;
                                var3 = _closure1_slot0;
                                var2 = 29;
                                var2 = var8[var2];
                                var2 = var3.bind(var6)(var2);
                                var2 = var2.MediaEngineContextTypes;
                                var3 = var2.DEFAULT;
                                var2 = true;
                                var2 = var4.bind(var5)(var3, var2);
case 91:
                                var4 = _closure4_slot0;
                                var3 = var4.selectVoiceChannel;
                                var2 = _closure2_slot8;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure2_slot5;
                                var2 = _closure1_slot36;
                                var2 = var2.STREAM;
                                var2 = var3 === var2;
                                if(!var2) { _fun0004_ip = 93; continue _fun0004 }
case 6:
                                var3 = _closure2_slot4;
                                var2 = var7 != var3;
case 93:
                                if(!var2) { _fun0004_ip = 94; continue _fun0004 }
case 95:
                                var4 = _closure1_slot2;
                                var3 = _closure1_slot3;
                                var2 = 30;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.watchStreamAndTransitionToStream;
                                var2 = {};
                                var6 = _closure1_slot35;
                                var6 = var6.GUILD;
                                var2['streamType'] = var6;
                                var6 = _closure2_slot4;
                                var2['ownerId'] = var6;
                                var6 = _closure2_slot0;
                                var2['guildId'] = var6;
                                var6 = _closure2_slot8;
                                var2['channelId'] = var6;
                                var2 = var3.bind(var4)(var2);
case 94:
                                var3 = _closure2_slot5;
                                var2 = _closure1_slot36;
                                var2 = var2.EMBEDDED_APPLICATION;
                                var2 = var3 === var2;
                                if(!var2) { _fun0004_ip = 96; continue _fun0004 }
case 97:
                                var3 = _closure2_slot6;
                                var2 = var7 != var3;
case 96:
                                if(!var2) { _fun0004_ip = 98; continue _fun0004 }
case 99:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var2 = 24;
                                var2 = var4[var2];
                                var4 = undefined;
                                var6 = var3.bind(var4)(var2);
                                var3 = var6.transitionTo;
                                var10 = _closure1_slot25;
                                var9 = var10.CHANNEL;
                                var2 = _closure2_slot0;
                                if(!(var7 == var2)) { _fun0004_ip = 100; continue _fun0004 }
case 101:
                                var8 = _closure1_slot26;
                                _fun0004_ip = 102; continue _fun0004;
case 100:
                                var8 = _closure2_slot0;
case 102:
                                var2 = _closure2_slot8;
                                var2 = var9.bind(var10)(var8, var2);
                                var2 = var3.bind(var6)(var2);
                                var3 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var2 = 31;
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
                                if(var8) { _fun0004_ip = 103; continue _fun0004 }
case 104:
                                var8 = _closure2_slot2;
                                var6 = var8.intent;
case 103:
                                var2['intent'] = var6;
                                var6 = _closure2_slot2;
                                var7 = var7 == var6;
                                var6 = undefined;
                                if(var7) { _fun0004_ip = 105; continue _fun0004 }
case 106:
                                var7 = _closure2_slot2;
                                var6 = var7.inviterUserId;
case 105:
                                var2['inviterUserId'] = var6;
                                var6 = _closure2_slot3;
                                var2['analyticsLocations'] = var6;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var5 = 32;
                                var5 = var7[var5];
                                var5 = var6.bind(var4)(var5);
                                var5 = var5.CommandOrigin;
                                var5 = var5.CHAT;
                                var2['commandOrigin'] = var5;
                                var2 = var3.bind(var4)(var2);
case 98:
                                var2 = undefined;
                                return var2;
case 87:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var3 = 27;
                                var3 = var4[var3];
                                var4 = undefined;
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.connectAndOpen;
                                var7 = _closure2_slot1;
                                var3 = _closure1_slot11;
                                var3 = var7 instanceof var3;
                                if(var3) { _fun0004_ip = 107; continue _fun0004 }
case 108:
                                var7 = _closure1_slot10;
                                var3 = _closure2_slot1;
                                var3 = var7.bind(var4)(var3);
                                _fun0004_ip = 109; continue _fun0004;
case 107:
                                var3 = _closure2_slot1;
case 109:
                                var3 = var5.bind(var6)(var3);
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var2 = 24;
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
                        if(var3) { _fun0003_ip = 110; continue _fun0003 }
case 111:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 33;
                        var4 = var5[var4];
                        var5 = undefined;
                        var8 = var6.bind(var5)(var4);
                        var7 = var8.shouldShowMembershipVerificationGate;
                        var6 = _closure2_slot0;
                        var9 = _closure1_slot17;
                        var4 = new Array(3);
                        var4[0] = var9;
                        var9 = _closure1_slot22;
                        var4[1] = var9;
                        var9 = _closure1_slot16;
                        var4[2] = var9;
                        var4 = var7.bind(var8)(var6, var4);
                        if(!var4) { _fun0003_ip = 110; continue _fun0003 }
case 112:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var3 = 34;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.openMemberVerificationModal;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var4)(var1, var2);
                        _fun0003_ip = 113; continue _fun0003;
case 110:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 113:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var7.bind(var1)(var6);
case 79:
            var2 = function getTransition(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg2;
                    var3 = arg1;
                    var7 = var3.type;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0005_ip = 114; continue _fun0005 }
case 115:
                    var2 = {};
case 114:
                    var3 = var2.transitionTo;
                    var _closure3_slot0 = var3;
                    var8 = var2.welcomeModalChannelId;
                    var2 = var2.guildScheduledEvent;
                    var3 = _closure1_slot24;
                    var5 = var3.GUILD_STAGE_VOICE;
                    var3 = {};
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var9 = 23;
                    var10 = var10[var9];
                    var9 = undefined;
                    var9 = var11.bind(var9)(var10);
                    var9 = var9.INVITE_ACCEPT;
                    var3['source'] = var9;
                    var9 = true;
                    var3['navigationReplace'] = var9;
                    var _closure3_slot1 = var3;
                    if(!(var4 != var8)) { _fun0005_ip = 116; continue _fun0005 }
case 117:
                    var3['welcomeModalChannelId'] = var8;
case 116:
                    if(!(var7 === var5)) { _fun0005_ip = 118; continue _fun0005 }
case 119:
                    var5 = {};
                    var6 = _closure1_slot37;
                    var5['stageInviteKey'] = var6;
                    var3['state'] = var5;
case 118:
                    if(!(var4 != var2)) { _fun0005_ip = 120; continue _fun0005 }
case 121:
                    var2 = var2.id;
                    var3['guildScheduledEventId'] = var2;
case 120:
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var5 = arg1;
                            var3 = _closure3_slot0;
                            var1 = null;
                            if(!(var1 == var3)) { _fun0006_ip = 122; continue _fun0006 }
case 123:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 24;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.transitionTo;
                            var1 = _closure3_slot1;
                            var1 = var3.bind(var4)(var5, var1);
                            _fun0006_ip = 124; continue _fun0006;
case 122:
                            var4 = _closure3_slot0;
                            var3 = _closure3_slot1;
                            var2 = undefined;
                            var1 = var4.bind(var2)(var5, var3);
case 124:
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var2 = var2.bind(var1)(var5, var4);
            var2 = var2.bind(var1)(var3);
case 45:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var6 = function transitionToInviteChannelSync(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arguments[2];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0007_ip = 111; continue _fun0007 }
case 125:
            var3 = new Array(0);
case 111:
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
                    var2 = _closure1_slot22;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var10 = null;
                    var1 = var10 == var7;
                    if(var1) { _fun0008_ip = 126; continue _fun0008 }
case 127:
                    var1 = var10 == var4;
case 126:
                    if(var1) { _fun0008_ip = 128; continue _fun0008 }
case 7:
                    var2 = var7.nsfw;
                    if(!var2) { _fun0008_ip = 129; continue _fun0008 }
case 130:
                    var4 = var4.nsfwAllowed;
                    var2 = !var4;
case 129:
                    if(var2) { _fun0008_ip = 131; continue _fun0008 }
case 132:
                    var4 = var7.isGuildVocalOrThread;
                    var4 = var4.bind(var7)();
                    if(!var4) { _fun0008_ip = 133; continue _fun0008 }
case 134:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 39;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var8.bind(var5)(var6);
                    var6 = var8.maybeOpenAgeGateForVoiceChannel;
                    var5 = _closure2_slot0;
                    var4 = var6.bind(var8)(var5);
case 133:
                    var2 = var4;
case 131:
                    if(var2) { _fun0008_ip = 135; continue _fun0008 }
case 136:
                    var4 = var7.isGuildVocalOrThread;
                    var4 = var4.bind(var7)();
                    if(!var4) { _fun0008_ip = 137; continue _fun0008 }
case 10:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 40;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var8.bind(var5)(var6);
                    var6 = var8.maybeOpenSpoilerGateForVoiceChannel;
                    var5 = _closure2_slot0;
                    var4 = var6.bind(var8)(var5);
case 137:
                    var2 = var4;
case 135:
                    var2 = !var2;
                    if(!var2) { _fun0008_ip = 138; continue _fun0008 }
case 139:
                    var4 = _closure2_slot1;
                    var6 = var10 == var4;
                    var5 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0008_ip = 140; continue _fun0008 }
case 141:
                    var6 = _closure2_slot1;
                    var4 = var6.guildScheduledEvent;
case 140:
                    if(!(var10 == var4)) { _fun0008_ip = 142; continue _fun0008 }
case 16:
                    var6 = _closure1_slot40;
                    var4 = {};
                    var8 = var7.getGuildId;
                    var8 = var8.bind(var7)();
                    if(!(var10 == var8)) { _fun0008_ip = 143; continue _fun0008 }
case 144:
                    var8 = _closure1_slot26;
case 143:
                    var4['guildId'] = var8;
                    var4['channel'] = var7;
                    var7 = _closure2_slot1;
                    var4['options'] = var7;
                    var7 = _closure2_slot2;
                    var4['analyticsLocations'] = var7;
                    var4 = var6.bind(var5)(var4);
                    var2 = false;
                    _fun0008_ip = 138; continue _fun0008;
case 142:
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
                            if(!(var2 != var3)) { _fun0009_ip = 126; continue _fun0009 }
case 145:
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
                                    if(!(var1 != var3)) { _fun0010_ip = 92; continue _fun0010 }
case 111:
                                    var1 = _closure4_slot1;
                                    var5['welcomeModalChannelId'] = var1;
case 92:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var1 = 36;
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
case 126:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var5)(var4);
                    var2 = false;
case 138:
                    var1 = var2;
case 128:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot41 = var6;
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
case 146:
                    var7 = var6.guild_id;
                    var4 = var6.channel_id;
                    var5 = _closure1_slot7;
                    var2 = undefined;
                    var5 = var5.bind(var2)(var6);
                    if(!var5) { _fun0011_ip = 147; continue _fun0011 }
case 148:
                    var5 = null;
                    if(!(var5 == var4)) { _fun0011_ip = 149; continue _fun0011 }
case 147:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 41;
                    var5 = var8[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.transitionToGuildSync;
                    var5 = var5.bind(var6)(var7);
                    SaveGenerator(address=78);
case 150:
                    return var5;
case 151:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!var6) { _fun0011_ip = 152; continue _fun0011 }
case 153:
                    return var5;
case 149:
                    var3 = _closure1_slot41;
                    var3 = var3.bind(var2)(var4);
case 152:
                    return var2;
case 9:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot42 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot42 = var1;
    var2 = function trackInviteServerClicked(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var7 = arg3;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 42;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot29;
            var3 = var2.INVITE_SERVER_CLICKED;
            var2 = {};
            var6 = arg1;
            var2['guild_id'] = var6;
            var6 = arg2;
            var2['action'] = var6;
            var6 = null;
            var8 = var6 != var7;
            if(!var8) { _fun0012_ip = 154; continue _fun0012 }
case 155:
            var6 = var7;
case 154:
            var2['location_stack'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.addPostConnectionCallback;
    var _closure1_slot5 = var5;
    var5 = 2;
    var10 = var8[var5];
    var10 = var9.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.isGuildScheduledEventActive;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var10 = var5.isGuildTextChannelType;
    var _closure1_slot8 = var10;
    var10 = var5.isGuildVocalChannelOrVocalThreadType;
    var _closure1_slot9 = var10;
    var10 = var5.createChannelRecord;
    var _closure1_slot10 = var10;
    var10 = var5.ChannelRecordBase;
    var _closure1_slot11 = var10;
    var5 = var5.getAccessPermissions;
    var _closure1_slot12 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot14 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot15 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot16 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot17 = var5;
    var5 = 9;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot18 = var5;
    var5 = 10;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot19 = var5;
    var5 = 11;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot20 = var5;
    var5 = 12;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot21 = var5;
    var5 = 13;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot22 = var5;
    var5 = 14;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var9 = var5.Endpoints;
    var _closure1_slot23 = var9;
    var9 = var5.ChannelTypes;
    var _closure1_slot24 = var9;
    var9 = var5.Routes;
    var _closure1_slot25 = var9;
    var9 = var5.ME;
    var _closure1_slot26 = var9;
    var9 = var5.RPCCommands;
    var _closure1_slot27 = var9;
    var9 = var5.GuildFeatures;
    var _closure1_slot28 = var9;
    var9 = var5.AnalyticEvents;
    var _closure1_slot29 = var9;
    var9 = var5.UserFlags;
    var _closure1_slot30 = var9;
    var9 = var5.Permissions;
    var _closure1_slot31 = var9;
    var5 = var5.AbortCodes;
    var _closure1_slot32 = var5;
    var5 = 15;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.AgeGateSource;
    var _closure1_slot33 = var5;
    var5 = 16;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.StaticChannelRoute;
    var _closure1_slot34 = var5;
    var5 = 17;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.StreamTypes;
    var _closure1_slot35 = var5;
    var5 = 18;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.InviteTargetTypes;
    var _closure1_slot36 = var5;
    var5 = 19;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.STAGE_INVITE_STATE_KEY;
    var _closure1_slot37 = var5;
    var5 = null;
    var _closure1_slot38 = var5;
    var5 = {};
    var9 = function resolveInvite(arg1, arg2, arg3) {
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
            var1 = 37;
            var7 = var3[var1];
            var3 = undefined;
            var9 = var9.bind(var3)(var7);
            var7 = var9.isDispatching;
            var7 = var7.bind(var9)();
            if(var7) { _fun0013_ip = 121; continue _fun0013 }
case 156:
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
            var1 = 38;
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
                    if(!(var1 == var3)) { _fun0014_ip = 153; continue _fun0014 }
case 90:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 37;
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
                    _fun0014_ip = 121; continue _fun0014;
case 153:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 37;
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
case 121:
                    var1 = {};
                    var1['invite'] = var3;
                    var1['code'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            _fun0013_ip = 157; continue _fun0013;
case 121:
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.resolve;
            var4 = var3.bind(var4)();
            var3 = var4.then;
            var2 = function() {
                var5 = _closure1_slot43;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 157:
            return var1;
        }
    };
    var _closure1_slot43 = var9;
    var5['resolveInvite'] = var9;
    var9 = function getInviteContext(arg1, arg2) {
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
case 158:
            var4 = var3.guild;
case 3:
            var6 = var5 != var4;
            var4 = undefined;
            if(!var6) { _fun0015_ip = 159; continue _fun0015 }
case 148:
            var6 = var3.guild;
            var4 = var6.id;
case 159:
            var1['location_guild_id'] = var4;
            var6 = var5 == var3;
            var4 = undefined;
            if(var6) { _fun0015_ip = 160; continue _fun0015 }
case 161:
            var4 = var3.channel;
case 160:
            var6 = var5 != var4;
            var4 = undefined;
            if(!var6) { _fun0015_ip = 149; continue _fun0015 }
case 132:
            var6 = var3.channel;
            var4 = var6.id;
case 149:
            var1['location_channel_id'] = var4;
            var6 = var5 == var3;
            var4 = undefined;
            if(var6) { _fun0015_ip = 162; continue _fun0015 }
case 163:
            var4 = var3.channel;
case 162:
            var4 = var5 != var4;
            var2 = undefined;
            if(!var4) { _fun0015_ip = 133; continue _fun0015 }
case 164:
            var3 = var3.channel;
            var2 = var3.type;
case 133:
            var1['location_channel_type'] = var2;
            return var1;
        }
    };
    var5['getInviteContext'] = var9;
    var9 = function createInvite(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0016_ip = 165; continue _fun0016 }
case 166:
            var3 = {};
case 165:
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
                        if(var3) { _fun0017_ip = 167; continue _fun0017 }
case 146:
                        var5 = undefined;
                        var2 = undefined;
                        var7 = undefined;
case 123: // try_start_0
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
                        if(var4) { _fun0017_ip = 168; continue _fun0017 }
case 169:
                        var3 = var2.length;
case 168:
                        var2 = 0;
                        if(!(var2 === var3)) { _fun0017_ip = 129; continue _fun0017 }
case 170:
                        var2 = var7;
                        var2 = delete var2.role_ids;
case 129:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 43;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var6 = var2.HTTP;
                        var3 = var6.post;
                        var2 = {};
                        var11 = _closure1_slot23;
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
case 171:
                        return var2;
case 172:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0017_ip = 41; continue _fun0017 }
case 173:
                        var3 = var2.body;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var4 = 37;
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
case 174: // try_end0
                        return var3;
case 41:
                        return var2;
case 175: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 37;
                        var2 = var6[var2];
                        var8 = var3.bind(var5)(var2);
                        var7 = var8.dispatch;
                        var2 = {};
                        var9 = 'INSTANT_INVITE_CREATE_FAILURE';
                        var2['type'] = var9;
                        var9 = _closure2_slot0;
                        var2['channelId'] = var9;
                        var2 = var7.bind(var8)(var2);
                        var2 = 44;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {constructor: {value: var2}});
                        var14 = var3;
                        var13 = var4;
                        var2 = new var14[var2](var13, var12);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
case 167:
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
    var5['createInvite'] = var9;
    var9 = function mobileCreateInvite(arg1, arg2) {
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
                    if(var2) { _fun0018_ip = 135; continue _fun0018 }
case 146:
                    var6 = _closure1_slot18;
                    var5 = var6.getInvite;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var5 = var5.bind(var6)(var4);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0018_ip = 176; continue _fun0018 }
case 127:
                    var6 = var5.isExpired;
                    var6 = var6.bind(var5)();
                    if(var6) { _fun0018_ip = 176; continue _fun0018 }
case 122:
                    var5 = var5.code;
                    return var5;
case 176:
                    var8 = {};
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 45;
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
                        var1 = 37;
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
case 177:
                    return var2;
case 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0018_ip = 137; continue _fun0018 }
case 172:
                    var4 = var4 == var2;
                    var3 = undefined;
                    if(var4) { _fun0018_ip = 13; continue _fun0018 }
case 178:
                    var3 = var2.code;
case 13:
                    return var3;
case 137:
                    return var2;
case 135:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var5['mobileCreateInvite'] = var9;
    var9 = function getAllFriendInvites(arg1) {
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
                    if(var2) { _fun0019_ip = 179; continue _fun0019 }
case 180:
                    var3 = global;
                    var6 = var3.Promise;
                    var2 = var6.prototype;
                    var5 = Object.create(var2, {constructor: {value: var6}});
                    var13 = function(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 37;
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
                    var14 = var5;
                    var2 = new var14[var6](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var5;
                    SaveGenerator(address=49);
case 159:
                    return var2;
case 181:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0019_ip = 182; continue _fun0019 }
case 183:
                    var7 = _closure1_slot18;
                    var6 = var7.getFriendInvitesFetching;
                    var6 = var6.bind(var7)();
                    if(var6) { _fun0019_ip = 184; continue _fun0019 }
case 185:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var7 = 43;
                    var7 = var6[var7];
                    var10 = undefined;
                    var7 = var8.bind(var10)(var7);
                    var9 = var7.HTTP;
                    var8 = var9.get;
                    var7 = {};
                    var11 = _closure1_slot23;
                    var11 = var11.FRIEND_INVITES;
                    var7['url'] = var11;
                    var11 = {};
                    var12 = _closure2_slot0;
                    var11['location'] = var12;
                    var7['context'] = var11;
                    var11 = false;
                    var7['rejectWithError'] = var11;
                    var7 = var8.bind(var9)(var7);
                    _closure1_slot38 = var7;
                    var7 = _closure1_slot1;
                    var11 = 37;
                    var6 = var6[var11];
                    var8 = var7.bind(var10)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var9 = 'FRIEND_INVITES_FETCH_REQUEST';
                    var6['type'] = var9;
                    var9 = var3.Date;
                    var12 = var9.prototype;
                    var12 = Object.create(var12, {constructor: {value: var9}});
                    var14 = var12;
                    var9 = new var14[var9](var13);
                    var9 = var9 instanceof Object ? var9 : var12;
                    var6['requestedAt'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var6 = _closure1_slot38;
                    SaveGenerator(address=240);
case 94:
                    return var6;
case 186:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0019_ip = 187; continue _fun0019 }
case 21:
                    var7 = var6.body;
                    var8 = null;
                    _closure1_slot38 = var8;
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
                    var14 = var12;
                    var11 = new var14[var11](var13);
                    var11 = var11 instanceof Object ? var11 : var12;
                    var8['receivedAt'] = var11;
                    var8['invites'] = var7;
                    var8 = var9.bind(var10)(var8);
                    return var7;
case 187:
                    return var6;
case 184:
                    var7 = _closure1_slot38;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0019_ip = 188; continue _fun0019 }
case 51:
                    var7 = var3.Promise;
                    var6 = var7.reject;
                    var9 = var3.Error;
                    var3 = var9.prototype;
                    var8 = Object.create(var3, {constructor: {value: var9}});
                    var13 = 'Invalid friend invite fetch request';
                    var14 = var8;
                    var3 = new var14[var9](var13, var12);
                    var3 = var3 instanceof Object ? var3 : var8;
                    var3 = var6.bind(var7)(var3);
                    _fun0019_ip = 189; continue _fun0019;
case 188:
                    var6 = _closure1_slot38;
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.body;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4);
case 189:
                    return var3;
case 182:
                    return var2;
case 179:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var5['getAllFriendInvites'] = var9;
    var9 = function createFriendInvite(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 37;
            var2 = var7[var2];
            var4 = undefined;
            var8 = var3.bind(var4)(var2);
            var3 = var8.dispatch;
            var2 = {};
            var9 = 'FRIEND_INVITE_CREATE_REQUEST';
            var2['type'] = var9;
            var2 = var3.bind(var8)(var2);
            var3 = _closure1_slot0;
            var2 = 43;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var6 = _closure1_slot23;
            var6 = var6.FRIEND_INVITES;
            var2['url'] = var6;
            var6 = null;
            if(!(var6 == var5)) { _fun0020_ip = 163; continue _fun0020 }
case 112:
            var5 = {};
case 163:
            var2['body'] = var5;
            var5 = {};
            var6 = arg2;
            var5['location'] = var6;
            var2['context'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.body;
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 37;
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
                var2 = 37;
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
    var5['createFriendInvite'] = var9;
    var9 = function revokeFriendInvites() {
        var2 = _closure1_slot1;
        var5 = _closure1_slot3;
        var1 = 37;
        var1 = var5[var1];
        var3 = undefined;
        var6 = var2.bind(var3)(var1);
        var2 = var6.dispatch;
        var1 = {};
        var7 = 'FRIEND_INVITE_REVOKE_REQUEST';
        var1['type'] = var7;
        var1 = var2.bind(var6)(var1);
        var2 = _closure1_slot0;
        var1 = 43;
        var1 = var5[var1];
        var1 = var2.bind(var3)(var1);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var4 = _closure1_slot23;
        var4 = var4.FRIEND_INVITES;
        var1['url'] = var4;
        var4 = {};
        var5 = global;
        var5 = var5.location;
        var4['location'] = var5;
        var1['context'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            var1 = arg1;
            var5 = var1.body;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 37;
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
    var5['revokeFriendInvites'] = var9;
    var9 = function revokeFriendInvite(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 43;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var6 = _closure1_slot23;
        var5 = var6.INVITE;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var5['revokeFriendInvite'] = var9;
    var9 = function fetchFriendMembers(arg1) {
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
                    if(var2) { _fun0021_ip = 190; continue _fun0021 }
case 146: // try_start_0
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var2 = 46;
                    var2 = var11[var2];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var2);
                    var4 = var6.get;
                    var2 = {};
                    var10 = _closure1_slot23;
                    var9 = var10.INVITE_FRIEND_MEMBERS;
                    var8 = _closure2_slot0;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var8 = {};
                    var10 = _closure1_slot0;
                    var9 = 47;
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
                            var1 = 48;
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
                            if(var7) { _fun0022_ip = 191; continue _fun0022 }
case 183:
                            var6 = var6.body;
                            var7 = var4 == var6;
                            var5 = undefined;
                            if(var7) { _fun0022_ip = 191; continue _fun0022 }
case 154:
                            var6 = var6.friend_member_ids;
                            var7 = var4 == var6;
                            var5 = undefined;
                            if(var7) { _fun0022_ip = 191; continue _fun0022 }
case 149:
                            var5 = var6.length;
case 191:
                            var6 = var4 != var5;
                            var4 = 0;
                            if(!var6) { _fun0022_ip = 8; continue _fun0022 }
case 112:
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
case 136:
                    return var2;
case 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0021_ip = 44; continue _fun0021 }
case 11:
                    var6 = var2.body;
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var3 = 37;
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
case 141: // try_end0
                    _fun0021_ip = 23; continue _fun0021;
case 44:
                    return var2;
case 17: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 37;
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
case 190:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var5['fetchFriendMembers'] = var9;
    var9 = function clearInviteFromStore(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 37;
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
    var5['clearInviteFromStore'] = var9;
    var9 = function revokeInvite(arg1) {
        var7 = arg1;
        var11 = var7.code;
        var _closure2_slot0 = var11;
        var2 = var7.channel;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot1;
        var10 = _closure1_slot3;
        var2 = 46;
        var2 = var10[var2];
        var9 = undefined;
        var4 = var3.bind(var9)(var2);
        var3 = var4.delete;
        var2 = {};
        var8 = _closure1_slot23;
        var5 = var8.INVITE;
        var5 = var5.bind(var8)(var11);
        var2['url'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var5 = {};
        var8 = _closure1_slot0;
        var6 = 47;
        var6 = var10[var6];
        var6 = var8.bind(var9)(var6);
        var6 = var6.NetworkActionNames;
        var6 = var6.INVITE_REVOKE;
        var5['event'] = var6;
        var6 = {};
        var8 = var7.uses;
        var6['uses'] = var8;
        var8 = var7.maxUses;
        var6['max_uses'] = var8;
        var8 = var7.maxAge;
        var6['max_age'] = var8;
        var7 = var7.type;
        var6['invite_type'] = var7;
        var5['properties'] = var6;
        var2['trackedActionData'] = var5;
        var5 = false;
        var2['rejectWithError'] = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 37;
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
    var5['revokeInvite'] = var9;
    var9 = function acceptInvite(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var12 = var1.inviteKey;
            var _closure2_slot0 = var12;
            var9 = var1.context;
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
            var11 = 49;
            var1 = var1[var11];
            var5 = var5.bind(var4)(var1);
            var1 = var5.parseInviteCodeFromInviteKey;
            var13 = var1.bind(var5)(var12);
            var _closure2_slot8 = var13;
            var5 = _closure1_slot13;
            var1 = var5.getSessionId;
            var10 = var1.bind(var5)();
            var5 = _closure1_slot18;
            var1 = var5.getReceivedInstallationIdForInviteCode;
            var8 = var1.bind(var5)(var13);
            var _closure2_slot9 = var8;
            var5 = _closure1_slot19;
            var1 = var5.getInvite;
            var7 = var1.bind(var5)(var12);
            var5 = null;
            if(!(var5 == var7)) { _fun0023_ip = 192; continue _fun0023 }
case 193:
            var6 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var11];
            var6 = var6.bind(var4)(var1);
            var1 = var6.parseExtraDataFromInviteKey;
            var1 = var1.bind(var6)(var12);
            var6 = var1.guildScheduledEventId;
            _closure2_slot6 = var6;
            var11 = var1.targetChannelId;
            _closure2_slot4 = var11;
            var1 = var1.targetMessageId;
            _closure2_slot5 = var1;
            _fun0023_ip = 49; continue _fun0023;
case 192:
            var11 = var7.guild_scheduled_event;
            _closure2_slot3 = var11;
            var14 = var5 == var11;
            var1 = undefined;
            if(var14) { _fun0023_ip = 18; continue _fun0023 }
case 94:
            var1 = var11.id;
case 18:
            _closure2_slot6 = var1;
            var14 = var7.target_channel_id;
            var15 = var5 != var14;
            var11 = undefined;
            if(!var15) { _fun0023_ip = 194; continue _fun0023 }
case 20:
            var11 = var14;
case 194:
            _closure2_slot4 = var11;
            var11 = var7.target_message_id;
            var14 = var5 != var11;
            var7 = undefined;
            if(!var14) { _fun0023_ip = 195; continue _fun0023 }
case 22:
            var7 = var11;
case 195:
            _closure2_slot5 = var7;
            var6 = var1;
case 49:
            var7 = {};
            var17 = var7;
            var16 = var9;
            var1 = copyDataProperties(var17, var16);
            var1 = 'invite_guild_scheduled_event_id';
            var7[0] = var6;
            var6 = _closure1_slot22;
            var1 = var6.getCurrentUser;
            var14 = var1.bind(var6)();
            var6 = var5 == var14;
            var1 = undefined;
            if(var6) { _fun0023_ip = 196; continue _fun0023 }
case 197:
            var11 = var14.hasFlag;
            var6 = _closure1_slot30;
            var6 = var6.QUARANTINED;
            var1 = var11.bind(var14)(var6);
case 196:
            if(!(var5 != var1)) { _fun0023_ip = 198; continue _fun0023 }
case 199:
            if(var1) { _fun0023_ip = 200; continue _fun0023 }
case 198:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 37;
            var1 = var6[var1];
            var11 = var5.bind(var4)(var1);
            var5 = var11.dispatch;
            var1 = {};
            var14 = 'INVITE_ACCEPT';
            var1['type'] = var14;
            var1['code'] = var12;
            var1 = var5.bind(var11)(var1);
            var5 = _closure1_slot0;
            var1 = 43;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var6 = var1.HTTP;
            var5 = var6.post;
            var1 = {};
            var12 = _closure1_slot23;
            var11 = var12.INVITE;
            var11 = var11.bind(var12)(var13);
            var1['url'] = var11;
            var1['context'] = var7;
            var7 = true;
            var1['oldFormErrors'] = var7;
            var7 = {};
            var7['session_id'] = var10;
            var9 = var9.invite_instance_id;
            var7['invite_instance_id'] = var9;
            var7['received_installation_id'] = var8;
            var1['body'] = var7;
            var7 = false;
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
                            if(var3) { _fun0024_ip = 201; continue _fun0024 }
case 88:
                            var4 = _closure2_slot9;
                            var7 = null;
                            if(!(var7 != var4)) { _fun0024_ip = 202; continue _fun0024 }
case 90:
                            var6 = _closure2_slot7;
                            var5 = var6.clearReceivedInstallationIdForInviteCode;
                            var4 = _closure2_slot8;
                            var4 = var5.bind(var6)(var4);
case 202:
                            var8 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var4 = 37;
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
                            if(!(var7 == var4)) { _fun0024_ip = 203; continue _fun0024 }
case 204:
                            var9 = _closure1_slot6;
                            var8 = var9.getGuildScheduledEvent;
                            var4 = _closure2_slot6;
                            var9 = var8.bind(var9)(var4);
                            _fun0024_ip = 11; continue _fun0024;
case 203:
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
                            if(!(var7 == var9)) { _fun0024_ip = 137; continue _fun0024 }
case 205:
                            var9 = _closure2_slot4;
case 137:
                            var8 = 'target_channel_id';
                            var4[7] = var9;
                            var8 = var2.body;
                            var9 = var8.target_message_id;
                            if(!(var7 == var9)) { _fun0024_ip = 206; continue _fun0024 }
case 141:
                            var9 = _closure2_slot5;
case 206:
                            var8 = 'target_message_id';
                            var4[7] = var9;
                            var8 = var7 == var4;
                            var10 = undefined;
                            if(var8) { _fun0024_ip = 207; continue _fun0024 }
case 208:
                            var10 = var4.guild_id;
case 207:
                            if(!(var7 == var10)) { _fun0024_ip = 209; continue _fun0024 }
case 94:
                            var9 = var7 == var4;
                            var8 = undefined;
                            if(var9) { _fun0024_ip = 46; continue _fun0024 }
case 210:
                            var9 = var4.guild;
                            var11 = var7 == var9;
                            var8 = undefined;
                            if(var11) { _fun0024_ip = 46; continue _fun0024 }
case 211:
                            var8 = var9.id;
case 46:
                            var10 = var8;
case 209:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var8 = 20;
                            var8 = var11[var8];
                            var12 = var9.bind(var5)(var8);
                            var11 = var12.hasFlag;
                            var8 = var4.flags;
                            var13 = var7 != var8;
                            var9 = 0;
                            if(!var13) { _fun0024_ip = 212; continue _fun0024 }
case 213:
                            var9 = var8;
case 212:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var8 = 21;
                            var8 = var14[var8];
                            var8 = var13.bind(var5)(var8);
                            var8 = var8.GuildInviteFlags;
                            var8 = var8.IS_GUEST_INVITE;
                            var8 = var11.bind(var12)(var9, var8);
                            var9 = _closure2_slot2;
                            if(var9) { _fun0024_ip = 214; continue _fun0024 }
case 215:
                            if(var8) { _fun0024_ip = 214; continue _fun0024 }
case 196:
                            if(!(var7 != var10)) { _fun0024_ip = 214; continue _fun0024 }
case 199:
                            var8 = var4.new_member;
                            if(!var8) { _fun0024_ip = 214; continue _fun0024 }
case 216:
                            var8 = var4.show_verification_form;
                            if(var8) { _fun0024_ip = 214; continue _fun0024 }
case 217:
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var8 = 26;
                            var8 = var6[var8];
                            var9 = var9.bind(var5)(var8);
                            var8 = 51;
                            var8 = var6[var8];
                            var6 = var6.paths;
                            var6 = var9.bind(var5)(var8, var6);
                            SaveGenerator(address=424);
case 218:
                            return var6;
case 179:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(var8) { _fun0024_ip = 29; continue _fun0024 }
case 219:
                            var9 = var6.default;
                            var8 = {};
                            var8['guildId'] = var10;
                            var8 = var9.bind(var5)(var8);
                            SaveGenerator(address=450);
case 220:
                            return var8;
case 221:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            if(!var9) { _fun0024_ip = 214; continue _fun0024 }
case 222:
                            return var8;
case 29:
                            return var6;
case 214:
                            var6 = _closure2_slot1;
                            if(!(var7 != var6)) { _fun0024_ip = 223; continue _fun0024 }
case 224:
                            var3 = _closure2_slot1;
                            var3 = var3.bind(var5)(var4);
case 223:
                            var2 = var2.body;
                            return var2;
case 201:
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
                    if(var2) { _fun0025_ip = 90; continue _fun0025 }
case 114:
                    var5 = var1.code;
case 90:
                    var2 = _closure1_slot32;
                    var2 = var2.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED;
                    if(!(var5 === var2)) { _fun0025_ip = 153; continue _fun0025 }
case 147:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 52;
                    var2 = var6[var2];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.openAgeGateModal;
                    var2 = _closure1_slot33;
                    var2 = var2.JOIN_LARGE_GUILD_UNDERAGE;
                    var2 = var5.bind(var6)(var2);
case 153:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 37;
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
                    if(var11) { _fun0025_ip = 225; continue _fun0025 }
case 226:
                    var9 = var10.message;
case 225:
                    var7['message'] = var9;
                    var9 = var3.body;
                    var10 = var8 == var9;
                    var8 = undefined;
                    if(var10) { _fun0025_ip = 227; continue _fun0025 }
case 228:
                    var8 = var9.code;
case 227:
                    var7['code'] = var8;
                    var2['error'] = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 53;
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
            _fun0023_ip = 229; continue _fun0023;
case 200:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 50;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var17 = function(arg1, arg2) {
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
            var18 = var3;
            var2 = new var18[var4](var17, var16);
            var1 = var2 instanceof Object ? var2 : var3;
case 229:
            return var1;
        }
    };
    var5['acceptInvite'] = var9;
    var9 = function acceptInviteAndTransitionToInviteChannel(arg1) {
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
                if(!(var4 != var1)) { _fun0026_ip = 191; continue _fun0026 }
case 230:
                var7 = {};
                var2 = _closure1_slot39;
                var6 = undefined;
                var11 = var2.bind(var6)(var3);
                var12 = var7;
                var2 = copyDataProperties(var12, var11);
                var5 = _closure2_slot2;
                var2 = 'autoJoin';
                var7[1] = var5;
                var5 = _closure1_slot41;
                var1 = var3.channel;
                var2 = var1.id;
                var1 = _closure2_slot0;
                if(!(var4 == var1)) { _fun0026_ip = 231; continue _fun0026 }
case 124:
                var1 = new Array(0);
                _fun0026_ip = 232; continue _fun0026;
case 231:
                var1 = _closure2_slot0;
case 232:
                var1 = var5.bind(var6)(var2, var7, var1);
case 191:
                var2 = _closure2_slot1;
                if(!(var4 != var2)) { _fun0026_ip = 233; continue _fun0026 }
case 163:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
case 233:
                var1 = undefined;
                return var1;
            }
        };
        var1['callback'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var5['acceptInviteAndTransitionToInviteChannel'] = var9;
    var9 = function transitionToInvite(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var4 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0027_ip = 230; continue _fun0027 }
case 180:
            var2 = {};
case 230:
            var5 = var2.transitionTo;
            var3 = var2.muteOnJoinVoiceChannel;
            var7 = var4.channel;
            var9 = var4.guild;
            var10 = null;
            if(!(var10 != var9)) { _fun0027_ip = 231; continue _fun0027 }
case 5:
            var11 = var9.features;
            if(!(var10 != var11)) { _fun0027_ip = 231; continue _fun0027 }
case 234:
            var8 = var11.includes;
            var6 = _closure1_slot28;
            var6 = var6.HUB;
            var6 = var8.bind(var11)(var6);
            if(var6) { _fun0027_ip = 235; continue _fun0027 }
case 231:
            var6 = var4.flags;
            var8 = var10 != var6;
            var11 = 0;
            if(!var8) { _fun0027_ip = 236; continue _fun0027 }
case 237:
            var11 = var6;
case 236:
            var15 = _closure1_slot0;
            var6 = _closure1_slot3;
            var12 = 20;
            var13 = var6[var12];
            var14 = var15.bind(var1)(var13);
            var13 = var14.hasFlag;
            var16 = 21;
            var6 = var6[var16];
            var6 = var15.bind(var1)(var6);
            var6 = var6.GuildInviteFlags;
            var6 = var6.IS_GUEST_INVITE;
            var6 = var13.bind(var14)(var11, var6);
            var14 = var11;
            if(var6) { _fun0027_ip = 238; continue _fun0027 }
case 95:
            var15 = _closure1_slot0;
            var11 = _closure1_slot3;
            var12 = var11[var12];
            var13 = var15.bind(var1)(var12);
            var12 = var13.hasFlag;
            var11 = var11[var16];
            var11 = var15.bind(var1)(var11);
            var11 = var11.GuildInviteFlags;
            var11 = var11.IS_APPLICATION_BYPASS;
            var6 = var12.bind(var13)(var14, var11);
case 238:
            if(!(var10 != var9)) { _fun0027_ip = 239; continue _fun0027 }
case 140:
            if(var6) { _fun0027_ip = 239; continue _fun0027 }
case 240:
            var6 = var4.new_member;
            if(!var6) { _fun0027_ip = 239; continue _fun0027 }
case 208:
            var11 = _closure1_slot0;
            var6 = _closure1_slot3;
            var12 = 55;
            var6 = var6[var12];
            var11 = var11.bind(var1)(var6);
            var6 = var11.inviteGuildHasPendingMemberDisabledVerification;
            var6 = var6.bind(var11)(var9);
            if(!var6) { _fun0027_ip = 239; continue _fun0027 }
case 241:
            var11 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var12];
            var12 = var11.bind(var1)(var6);
            var11 = var12.openVerificationModalOrTransitionToApplication;
            var6 = var9.id;
            var6 = var11.bind(var12)(var6);
            _fun0027_ip = 242; continue _fun0027;
case 239:
            if(!(var10 != var7)) { _fun0027_ip = 242; continue _fun0027 }
case 243:
            var6 = _closure1_slot39;
            var6 = var6.bind(var1)(var4);
            if(!(var10 != var5)) { _fun0027_ip = 244; continue _fun0027 }
case 245:
            var6['transitionTo'] = var5;
case 244:
            if(!(var10 != var3)) { _fun0027_ip = 167; continue _fun0027 }
case 100:
            var6['muteOnJoinVoiceChannel'] = var3;
case 167:
            var5 = _closure1_slot40;
            var3 = {};
            if(!(var10 == var9)) { _fun0027_ip = 246; continue _fun0027 }
case 247:
            var8 = _closure1_slot26;
            _fun0027_ip = 54; continue _fun0027;
case 246:
            var8 = var9.id;
case 54:
            var3['guildId'] = var8;
            var3['channel'] = var7;
            var3['options'] = var6;
            var3 = var5.bind(var1)(var3);
            _fun0027_ip = 242; continue _fun0027;
case 235:
            var3 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 54;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.onOpenHubInvite;
            var2 = var2.bind(var3)(var4);
case 242:
            return var1;
        }
    };
    var5['transitionToInvite'] = var9;
    var9 = function transitionToInviteSync(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var2 = arg1;
            var3 = arguments[1];
            var5 = this;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0028_ip = 248; continue _fun0028 }
case 249:
            var3 = {};
case 248:
            var7 = var3.transitionTo;
            var8 = var3.intent;
            var4 = var2.channel;
            var3 = null;
            if(!(var3 != var4)) { _fun0028_ip = 2; continue _fun0028 }
case 250:
            var3 = _closure1_slot39;
            var9 = var3.bind(var1)(var2);
            var4 = var5.transitionToInviteChannelSync;
            var2 = var2.channel;
            var3 = var2.id;
            var2 = {};
            var10 = var2;
            var6 = copyDataProperties(var10, var9);
            var6 = 'intent';
            var2[5] = var8;
            var6 = 'transitionTo';
            var2[5] = var7;
            var7 = true;
            var6 = 'forceTransition';
            var2[5] = var7;
            var2 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var5['transitionToInviteSync'] = var9;
    var9 = function openNativeAppModal(arg1) {
        var4 = _closure1_slot0;
        var7 = _closure1_slot3;
        var1 = 49;
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
        var4 = 56;
        var4 = var7[var4];
        var5 = var5.bind(var1)(var4);
        var4 = var5.openNativeAppModal;
        var3 = var3.baseCode;
        var2 = _closure1_slot27;
        var2 = var2.INVITE_BROWSER;
        var2 = var4.bind(var5)(var3, var2, var6);
        return var1;
    };
    var5['openNativeAppModal'] = var9;
    var9 = function transitionToInviteOnboarding(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var2 = arg1;
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0029_ip = 230; continue _fun0029 }
case 180:
            var3 = {};
case 230:
            var4 = var3.transitionTo;
            if(!(var1 === var4)) { _fun0029_ip = 251; continue _fun0029 }
case 252:
            var5 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 24;
            var3 = var6[var3];
            var3 = var5.bind(var1)(var3);
            var4 = var3.transitionTo;
case 251:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var8 = 49;
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
            if(!var12) { _fun0029_ip = 233; continue _fun0029 }
case 116:
            var10 = var11;
case 233:
            var3['targetChannelId'] = var10;
            var11 = var2.target_message_id;
            var12 = var9 != var11;
            var10 = undefined;
            if(!var12) { _fun0029_ip = 203; continue _fun0029 }
case 118:
            var10 = var11;
case 203:
            var3['targetMessageId'] = var10;
            var10 = var2.guild_scheduled_event;
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0029_ip = 253; continue _fun0029 }
case 254:
            var9 = var10.id;
case 253:
            var3['guildScheduledEventId'] = var9;
            var7 = var6.bind(var7)(var3);
            var6 = _closure1_slot25;
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
    var5['transitionToInviteOnboarding'] = var9;
    var9 = function openApp(arg1, arg2, arg3, arg4, arg5) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var5 = arg1;
            var6 = arg2;
            var16 = arg3;
            var _closure2_slot0 = var5;
            var14 = null;
            var1 = var14 != var5;
            var15 = null;
            if(!var1) { _fun0030_ip = 255; continue _fun0030 }
case 90:
            var4 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 49;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.parseExtraDataFromInviteKey;
            var15 = var1.bind(var2)(var5);
case 255:
            var2 = var14 == var15;
            var1 = undefined;
            var12 = undefined;
            if(var2) { _fun0030_ip = 256; continue _fun0030 }
case 257:
            var12 = var15.baseCode;
case 256:
            var2 = var14 == var15;
            var10 = undefined;
            if(var2) { _fun0030_ip = 258; continue _fun0030 }
case 259:
            var10 = var15.targetMessageId;
case 258:
            var2 = var14 == var15;
            var11 = undefined;
            if(var2) { _fun0030_ip = 38; continue _fun0030 }
case 163:
            var11 = var15.targetChannelId;
case 38:
            var8 = _closure1_slot1;
            var7 = _closure1_slot3;
            var4 = 37;
            var9 = var7[var4];
            var17 = var8.bind(var1)(var9);
            var13 = var17.dispatch;
            var9 = {};
            var18 = 'INVITE_APP_OPENING';
            var9['type'] = var18;
            var9['code'] = var5;
            var9 = var13.bind(var17)(var9);
            var9 = 57;
            var7 = var7[var9];
            var7 = var8.bind(var1)(var7);
            var7 = var7.ua;
            if(!(var14 != var7)) { _fun0030_ip = 18; continue _fun0030 }
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
            if(!(!(var8 > var7))) { _fun0030_ip = 260; continue _fun0030 }
case 18:
            var8 = _closure1_slot1;
            var7 = _closure1_slot3;
            var7 = var7[var9];
            var7 = var8.bind(var1)(var7);
            var7 = var7.os;
            var13 = var14 == var7;
            var8 = undefined;
            if(var13) { _fun0030_ip = 261; continue _fun0030 }
case 262:
            var8 = var7.family;
case 261:
            var7 = 'Android';
            if(!(var7 !== var8)) { _fun0030_ip = 224; continue _fun0030 }
case 49:
            var8 = _closure1_slot1;
            var7 = _closure1_slot3;
            var7 = var7[var9];
            var7 = var8.bind(var1)(var7);
            var7 = var7.os;
            var9 = var14 == var7;
            var8 = undefined;
            if(var9) { _fun0030_ip = 263; continue _fun0030 }
case 264:
            var8 = var7.family;
case 263:
            var7 = 'iOS';
            if(!(var7 !== var8)) { _fun0030_ip = 224; continue _fun0030 }
case 265:
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var7 = 58;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var7 = var7.isTablet;
            if(var7) { _fun0030_ip = 224; continue _fun0030 }
case 266:
            var8 = var11;
            if(!(var14 != var6)) { _fun0030_ip = 267; continue _fun0030 }
case 268:
            var8 = var6;
case 267:
            var6 = var14 != var8;
            var9 = '';
            if(!var6) { _fun0030_ip = 269; continue _fun0030 }
case 104:
            var7 = _closure1_slot25;
            var6 = var7.INVITE_PROXY;
            var9 = var6.bind(var7)(var8, var10);
case 269:
            var6 = 0;
            var7 = var9[var6];
            var6 = '#';
            var8 = var9;
            if(!(var6 === var7)) { _fun0030_ip = 270; continue _fun0030 }
case 271:
            var7 = var9.slice;
            var6 = 1;
            var8 = var7.bind(var9)(var6);
case 270:
            var6 = global;
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = 'discord://';
            var8 = var7.bind(var6)(var8);
            _fun0030_ip = 272; continue _fun0030;
case 224:
            if(!(var14 == var12)) { _fun0030_ip = 273; continue _fun0030 }
case 274:
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 59;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getDefaultDynamicLinkTemplate;
            var9 = var6.bind(var7)();
            _fun0030_ip = 275; continue _fun0030;
case 273:
            var7 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 59;
            var6 = var13[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getInviteDynamicLinkTemplate;
            var9 = var6.bind(var7)(var12);
case 275:
            var13 = _closure1_slot0;
            var17 = _closure1_slot3;
            var6 = 60;
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
            if(!(var19 !== var18)) { _fun0030_ip = 276; continue _fun0030 }
case 277:
            var17 = 'invite';
case 276:
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
            if(var17) { _fun0030_ip = 278; continue _fun0030 }
case 279:
            var14 = var15.guildScheduledEventId;
case 278:
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
            var7 = 42;
            var7 = var17[var7];
            var11 = var9.bind(var1)(var7);
            var10 = var11.track;
            var7 = _closure1_slot29;
            var9 = var7.DEEP_LINK_CLICKED;
            var7 = {};
            var15 = _closure1_slot0;
            var14 = 61;
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
case 272:
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var6 = 62;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.launch;
            var3 = function(arg1) {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 37;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var5 = {};
                    var2 = arg1;
                    if(var2) { _fun0031_ip = 280; continue _fun0031 }
case 281:
                    var2 = 'INVITE_APP_NOT_OPENED';
                    var5['type'] = var2;
                    var2 = _closure2_slot0;
                    var5['code'] = var2;
                    var2 = var5;
                    _fun0031_ip = 282; continue _fun0031;
case 280:
                    var6 = 'INVITE_APP_OPENED';
                    var5['type'] = var6;
                    var6 = _closure2_slot0;
                    var5['code'] = var6;
                    var2 = var5;
case 282:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var8, var3);
            _fun0030_ip = 283; continue _fun0030;
case 260:
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
case 283:
            return var1;
        }
    };
    var5['openApp'] = var9;
    var9 = function setReceivedInstallationIdForInviteCode(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 37;
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
    var5['setReceivedInstallationIdForInviteCode'] = var9;
    var9 = function clearReceivedInstallationIdForInviteCode(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 37;
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
    var5['clearReceivedInstallationIdForInviteCode'] = var9;
    var5['transitionToInviteChannelSync'] = var6;
    var5['trackInviteServerClicked'] = var2;
    var6 = 63;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'actions/InstantInviteActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var5 = function transitionToGuildFromEventInvite() {
        var1 = undefined;
        var4 = _closure1_slot42;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['transitionToGuildFromEventInvite'] = var5;
    var4 = function trackInviteEmbedActioned(arg1, arg2) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
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
            var1 = 42;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot29;
            var3 = var2.INVITE_EMBED_ACTIONED;
            var2 = {};
            var2['action'] = var8;
            var8 = var6.code;
            var2['invite_code'] = var8;
            var16 = var6.type;
            var6 = null;
            var15 = var6 == var16;
            var8 = undefined;
            if(var15) { _fun0032_ip = 284; continue _fun0032 }
case 133:
            var15 = var16.toString;
            var8 = var15.bind(var16)();
case 284:
            var2['invite_type'] = var8;
            var15 = var6 != var14;
            var8 = null;
            if(!var15) { _fun0032_ip = 225; continue _fun0032 }
case 285:
            var8 = var14;
case 225:
            var2['inviter_id'] = var8;
            var14 = var6 != var13;
            var8 = null;
            if(!var14) { _fun0032_ip = 157; continue _fun0032 }
case 286:
            var8 = var13;
case 157:
            var2['invite_message_id'] = var8;
            var13 = var6 != var12;
            var8 = null;
            if(!var13) { _fun0032_ip = 287; continue _fun0032 }
case 288:
            var8 = var12;
case 287:
            var2['invite_instance_id'] = var8;
            var12 = var6 != var11;
            var8 = null;
            if(!var12) { _fun0032_ip = 289; continue _fun0032 }
case 290:
            var8 = var11;
case 289:
            var2['application_id'] = var8;
            var11 = var6 != var10;
            var8 = null;
            if(!var11) { _fun0032_ip = 16; continue _fun0032 }
case 291:
            var8 = var10;
case 16:
            var2['stream_key'] = var8;
            var10 = var6 != var9;
            var8 = null;
            if(!var10) { _fun0032_ip = 94; continue _fun0032 }
case 292:
            var8 = var9;
case 94:
            var2['number_of_users_in_channel'] = var8;
            var8 = var6 != var7;
            var6 = null;
            if(!var8) { _fun0032_ip = 293; continue _fun0032 }
case 294:
            var6 = var7;
case 293:
            var2['location_stack'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackInviteEmbedActioned'] = var4;
    var3['trackInviteServerClicked'] = var2;
    return var1;
})();