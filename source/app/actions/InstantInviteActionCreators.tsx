// app/actions/InstantInviteActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var6 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var9;
    var1 = function generateAcceptInviteOptions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = {};
            var4 = var3.target_type;
            var2 = _closure1_slot32;
            var2 = var2.STREAM;
            if(!(var2 !== var4)) { _fun0001_ip = 112; continue _fun0001 }
 28:
            var2 = _closure1_slot32;
            var2 = var2.EMBEDDED_APPLICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 70; continue _fun0001 }
 42:
            var2 = _closure1_slot32;
            var2 = var2.ROLE_SUBSCRIPTIONS_PURCHASE;
            if(!(var2 === var4)) { _fun0001_ip = 152; continue _fun0001 }
 56:
            var2 = var3.target_type;
            var1['targetType'] = var2;
            _fun0001_ip = 152; continue _fun0001;
 70:
            var2 = var3.target_type;
            var1['targetType'] = var2;
            var4 = var3.target_application;
            var2 = null;
            var6 = var2 == var4;
            var2 = undefined;
            if(var6) { _fun0001_ip = 104; continue _fun0001 }
 99:
            var2 = var4.id;
 104:
            var1['targetApplicationId'] = var2;
            _fun0001_ip = 152; continue _fun0001;
 112:
            var2 = var3.target_type;
            var1['targetType'] = var2;
            var4 = var3.target_user;
            var2 = null;
            var6 = var2 == var4;
            var2 = undefined;
            if(var6) { _fun0001_ip = 146; continue _fun0001 }
 141:
            var2 = var4.id;
 146:
            var1['targetUserId'] = var2;
 152:
            var8 = _closure1_slot16;
            var7 = var8.getGuild;
            var9 = var3.guild;
            var4 = null;
            var10 = var4 == var9;
            var2 = undefined;
            var6 = undefined;
            if(var10) { _fun0001_ip = 184; continue _fun0001 }
 179:
            var6 = var9.id;
 184:
            var6 = var7.bind(var8)(var6);
            var7 = var4 != var6;
            var6 = !var7;
            if(!var7) { _fun0001_ip = 205; continue _fun0001 }
 199:
            var6 = var3.new_member;
 205:
            if(!var6) { _fun0001_ip = 217; continue _fun0001 }
 208:
            var7 = var3.channel;
            var6 = var4 != var7;
 217:
            if(!var6) { _fun0001_ip = 239; continue _fun0001 }
 220:
            var8 = _closure1_slot8;
            var7 = var3.channel;
            var7 = var7.type;
            var6 = var8.bind(var2)(var7);
 239:
            if(!var6) { _fun0001_ip = 258; continue _fun0001 }
 242:
            var6 = var3.channel;
            var6 = var6.id;
            var1['welcomeModalChannelId'] = var6;
 258:
            var6 = var3.guild_scheduled_event;
            if(!(var4 != var6)) { _fun0001_ip = 280; continue _fun0001 }
 268:
            var6 = var3.guild_scheduled_event;
            var1['guildScheduledEvent'] = var6;
 280:
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var9 = 18;
            var6 = var6[var9];
            var14 = var7.bind(var2)(var6);
            var13 = var14.hasFlag;
            var6 = var3.flags;
            var7 = var4 != var6;
            var12 = 0;
            if(!var7) { _fun0001_ip = 323; continue _fun0001 }
 320:
            var12 = var6;
 323:
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var10 = 19;
            var11 = var6[var10];
            var11 = var7.bind(var2)(var11);
            var11 = var11.GuildInviteFlags;
            var11 = var11.IS_GUEST_INVITE;
            var11 = var13.bind(var14)(var12, var11);
            var1['isGuestInvite'] = var11;
            var6 = var6[var9];
            var7 = var7.bind(var2)(var6);
            var6 = var7.hasFlag;
            var9 = var3.flags;
            var11 = var4 != var9;
            var8 = 0;
            if(!var11) { _fun0001_ip = 399; continue _fun0001 }
 396:
            var8 = var9;
 399:
            var9 = _closure1_slot0;
            var5 = _closure1_slot3;
            var5 = var5[var10];
            var5 = var9.bind(var2)(var5);
            var5 = var5.GuildInviteFlags;
            var5 = var5.IS_APPLICATION_BYPASS;
            var5 = var6.bind(var7)(var8, var5);
            var1['isApplicationBypassInvite'] = var5;
            var3 = var3.inviter;
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 460; continue _fun0001 }
 455:
            var2 = var3.id;
 460:
            var1['inviterUserId'] = var2;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function transitionToInviteChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var7 = var1.guildId;
            var _closure2_slot0 = var7;
            var5 = var1.channel;
            var _closure2_slot1 = var5;
            var4 = var1.options;
            var _closure2_slot2 = var4;
            var9 = var1.analyticsLocations;
            var1 = undefined;
            if(!(var9 === var1)) { _fun0002_ip = 48; continue _fun0002 }
 44:
            var9 = new Array(0);
 48:
            var _closure2_slot3 = var9;
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var1;
            var _closure2_slot6 = var1;
            var _closure2_slot7 = var1;
            var _closure2_slot8 = var1;
            var _closure2_slot9 = var1;
            var _closure2_slot10 = var1;
            var8 = _closure1_slot16;
            var3 = var8.getGuild;
            var8 = var3.bind(var8)(var7);
            var10 = null;
            var11 = var10 == var8;
            var3 = undefined;
            if(var11) { _fun0002_ip = 134; continue _fun0002 }
 108:
            var12 = var8.features;
            var11 = var12.has;
            var8 = _closure1_slot26;
            var8 = var8.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var3 = var11.bind(var12)(var8);
 134:
            var8 = var4;
            if(!(var10 == var8)) { _fun0002_ip = 143; continue _fun0002 }
 141:
            var8 = {};
 143:
            var11 = var8.targetUserId;
            _closure2_slot4 = var11;
            var14 = var8.targetType;
            _closure2_slot5 = var14;
            var11 = var8.targetApplicationId;
            _closure2_slot6 = var11;
            var12 = var8.isGuestInvite;
            _closure2_slot7 = var12;
            var8 = var8.isApplicationBypassInvite;
            if(var12) { _fun0002_ip = 234; continue _fun0002 }
 192:
            if(var8) { _fun0002_ip = 234; continue _fun0002 }
 195:
            if(!(var10 != var4)) { _fun0002_ip = 210; continue _fun0002 }
 199:
            var8 = var4.forceTransition;
            if(var8) { _fun0002_ip = 234; continue _fun0002 }
 210:
            if(!var3) { _fun0002_ip = 234; continue _fun0002 }
 213:
            var8 = _closure1_slot19;
            var3 = var8.getGuildId;
            var3 = var3.bind(var8)();
            if(!(var3 === var7)) { _fun0002_ip = 782; continue _fun0002 }
 234:
            var16 = var5.type;
            var12 = _closure1_slot13;
            var8 = var12.getChannel;
            var3 = var5.id;
            var15 = var8.bind(var12)(var3);
            var8 = var10 == var4;
            var3 = undefined;
            if(var8) { _fun0002_ip = 273; continue _fun0002 }
 267:
            var3 = var4.targetType;
 273:
            if(!(var10 == var3)) { _fun0002_ip = 345; continue _fun0002 }
 277:
            var12 = _closure1_slot9;
            var8 = var12.has;
            var3 = var5.type;
            var3 = var8.bind(var12)(var3);
            if(var3) { _fun0002_ip = 345; continue _fun0002 }
 299:
            var8 = _closure1_slot0;
            var12 = _closure1_slot3;
            var3 = 20;
            var3 = var12[var3];
            var8 = var8.bind(var1)(var3);
            var3 = var8.canSeeOnboardingHome;
            var3 = var3.bind(var8)(var7);
            if(!var3) { _fun0002_ip = 345; continue _fun0002 }
 333:
            var3 = _closure1_slot30;
            var12 = var3.GUILD_HOME;
            _fun0002_ip = 455; continue _fun0002;
 345:
            var13 = _closure1_slot13;
            var8 = var13.getChannel;
            var3 = var5.id;
            var17 = var8.bind(var13)(var3);
            var13 = _closure1_slot18;
            var8 = var13.can;
            var3 = _closure1_slot29;
            var3 = var3.VIEW_CHANNEL;
            var3 = var8.bind(var13)(var3, var17);
            if(var3) { _fun0002_ip = 447; continue _fun0002 }
 393:
            var17 = _closure1_slot14;
            var13 = var17.getDefaultChannel;
            var3 = _closure1_slot29;
            var8 = var3.CREATE_INSTANT_INVITE;
            var3 = true;
            var8 = var13.bind(var17)(var7, var3, var8);
            var13 = var10 == var8;
            var3 = undefined;
            if(var13) { _fun0002_ip = 436; continue _fun0002 }
 431:
            var3 = var8.id;
 436:
            if(!(var10 == var3)) { _fun0002_ip = 445; continue _fun0002 }
 440:
            var3 = var5.id;
 445:
            _fun0002_ip = 452; continue _fun0002;
 447:
            var3 = var5.id;
 452:
            var12 = var3;
 455:
            _closure2_slot8 = var12;
            var3 = _closure1_slot22;
            var3 = var3.GUILD_STAGE_VOICE;
            var3 = var16 === var3;
            _closure2_slot9 = var3;
            var8 = _closure1_slot23;
            var3 = var8.CHANNEL;
            var3 = var3.bind(var8)(var7, var12);
            _closure2_slot10 = var3;
            var13 = _closure1_slot9;
            var8 = var13.has;
            var8 = var8.bind(var13)(var16);
            if(var8) { _fun0002_ip = 752; continue _fun0002 }
 517:
            var13 = _closure1_slot0;
            var16 = _closure1_slot3;
            var8 = 33;
            var8 = var16[var8];
            var13 = var13.bind(var1)(var8);
            var8 = var13.isActivityInTextSupportedForChannel;
            var8 = var8.bind(var13)(var15);
            if(!var8) { _fun0002_ip = 565; continue _fun0002 }
 551:
            var13 = _closure1_slot32;
            var13 = var13.EMBEDDED_APPLICATION;
            var8 = var14 === var13;
 565:
            if(!var8) { _fun0002_ip = 572; continue _fun0002 }
 568:
            var8 = var10 != var11;
 572:
            if(!var8) { _fun0002_ip = 766; continue _fun0002 }
 578:
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var8 = 22;
            var8 = var14[var8];
            var13 = var13.bind(var1)(var8);
            var8 = var13.transitionTo;
            var15 = _closure1_slot23;
            var14 = var15.CHANNEL;
            if(!(var10 == var7)) { _fun0002_ip = 622; continue _fun0002 }
 618:
            var7 = _closure1_slot24;
 622:
            var7 = var14.bind(var15)(var7, var12);
            var7 = var8.bind(var13)(var7);
            var8 = _closure1_slot1;
            var13 = _closure1_slot3;
            var7 = 29;
            var7 = var13[var7];
            var8 = var8.bind(var1)(var7);
            var7 = {};
            var7['channelId'] = var12;
            var7['applicationId'] = var11;
            var12 = var10 == var4;
            var11 = undefined;
            if(var12) { _fun0002_ip = 678; continue _fun0002 }
 672:
            var11 = var4.intent;
 678:
            var7['intent'] = var11;
            var11 = var10 == var4;
            var10 = undefined;
            if(var11) { _fun0002_ip = 698; continue _fun0002 }
 692:
            var10 = var4.inviterUserId;
 698:
            var7['inviterUserId'] = var10;
            var7['analyticsLocations'] = var9;
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var9 = 30;
            var9 = var11[var9];
            var9 = var10.bind(var1)(var9);
            var9 = var9.CommandOrigin;
            var9 = var9.CHAT;
            var7['commandOrigin'] = var9;
            var7 = var8.bind(var1)(var7);
            _fun0002_ip = 766; continue _fun0002;
 752:
            var7 = _closure1_slot5;
            var6 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 24;
                var3 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = 23;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg1;
                        var2 = var2.default;
                        var _closure4_slot0 = var2;
                        var2 = function connect() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var2 = _closure2_slot9;
                                if(var2) { _fun0004_ip = 493; continue _fun0004 }
 13:
                                var2 = _closure2_slot2;
                                var7 = null;
                                var2 = var7 != var2;
                                if(!var2) { _fun0004_ip = 36; continue _fun0004 }
 26:
                                var3 = _closure2_slot2;
                                var2 = var3.muteOnJoinVoiceChannel;
 36:
                                if(!var2) { _fun0004_ip = 106; continue _fun0004 }
 39:
                                var4 = _closure1_slot1;
                                var8 = _closure1_slot3;
                                var3 = 26;
                                var3 = var8[var3];
                                var6 = undefined;
                                var5 = var4.bind(var6)(var3);
                                var4 = var5.setSelfMute;
                                var3 = _closure1_slot0;
                                var2 = 27;
                                var2 = var8[var2];
                                var2 = var3.bind(var6)(var2);
                                var2 = var2.MediaEngineContextTypes;
                                var3 = var2.DEFAULT;
                                var2 = true;
                                var2 = var4.bind(var5)(var3, var2);
 106:
                                var4 = _closure4_slot0;
                                var3 = var4.selectVoiceChannel;
                                var2 = _closure2_slot8;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure2_slot5;
                                var2 = _closure1_slot32;
                                var2 = var2.STREAM;
                                var2 = var3 === var2;
                                if(!var2) { _fun0004_ip = 160; continue _fun0004 }
 152:
                                var3 = _closure2_slot4;
                                var2 = var7 != var3;
 160:
                                if(!var2) { _fun0004_ip = 238; continue _fun0004 }
 163:
                                var4 = _closure1_slot2;
                                var3 = _closure1_slot3;
                                var2 = 28;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.watchStreamAndTransitionToStream;
                                var2 = {};
                                var6 = _closure1_slot31;
                                var6 = var6.GUILD;
                                var2['streamType'] = var6;
                                var6 = _closure2_slot4;
                                var2['ownerId'] = var6;
                                var6 = _closure2_slot0;
                                var2['guildId'] = var6;
                                var6 = _closure2_slot8;
                                var2['channelId'] = var6;
                                var2 = var3.bind(var4)(var2);
 238:
                                var3 = _closure2_slot5;
                                var2 = _closure1_slot32;
                                var2 = var2.EMBEDDED_APPLICATION;
                                var2 = var3 === var2;
                                if(!var2) { _fun0004_ip = 267; continue _fun0004 }
 259:
                                var3 = _closure2_slot6;
                                var2 = var7 != var3;
 267:
                                if(!var2) { _fun0004_ip = 489; continue _fun0004 }
 273:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var2 = 22;
                                var2 = var4[var2];
                                var4 = undefined;
                                var6 = var3.bind(var4)(var2);
                                var3 = var6.transitionTo;
                                var10 = _closure1_slot23;
                                var9 = var10.CHANNEL;
                                var2 = _closure2_slot0;
                                if(!(var7 == var2)) { _fun0004_ip = 325; continue _fun0004 }
 319:
                                var8 = _closure1_slot24;
                                _fun0004_ip = 329; continue _fun0004;
 325:
                                var8 = _closure2_slot0;
 329:
                                var2 = _closure2_slot8;
                                var2 = var9.bind(var10)(var8, var2);
                                var2 = var3.bind(var6)(var2);
                                var3 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var2 = 29;
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
                                if(var8) { _fun0004_ip = 405; continue _fun0004 }
 395:
                                var8 = _closure2_slot2;
                                var6 = var8.intent;
 405:
                                var2['intent'] = var6;
                                var6 = _closure2_slot2;
                                var7 = var7 == var6;
                                var6 = undefined;
                                if(var7) { _fun0004_ip = 433; continue _fun0004 }
 423:
                                var7 = _closure2_slot2;
                                var6 = var7.inviterUserId;
 433:
                                var2['inviterUserId'] = var6;
                                var6 = _closure2_slot3;
                                var2['analyticsLocations'] = var6;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var5 = 30;
                                var5 = var7[var5];
                                var5 = var6.bind(var4)(var5);
                                var5 = var5.CommandOrigin;
                                var5 = var5.CHAT;
                                var2['commandOrigin'] = var5;
                                var2 = var3.bind(var4)(var2);
 489:
                                var2 = undefined;
                                return var2;
 493:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var3 = 25;
                                var3 = var4[var3];
                                var4 = undefined;
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.connectAndOpen;
                                var7 = _closure2_slot1;
                                var3 = _closure1_slot11;
                                var3 = var7 instanceof var3;
                                if(var3) { _fun0004_ip = 554; continue _fun0004 }
 539:
                                var7 = _closure1_slot10;
                                var3 = _closure2_slot1;
                                var3 = var7.bind(var4)(var3);
                                _fun0004_ip = 558; continue _fun0004;
 554:
                                var3 = _closure2_slot1;
 558:
                                var3 = var5.bind(var6)(var3);
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var2 = 22;
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
                        if(var3) { _fun0003_ip = 139; continue _fun0003 }
 29:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 31;
                        var4 = var5[var4];
                        var5 = undefined;
                        var8 = var6.bind(var5)(var4);
                        var7 = var8.shouldShowMembershipVerificationGate;
                        var6 = _closure2_slot0;
                        var9 = _closure1_slot16;
                        var4 = new Array(3);
                        var4[0] = var9;
                        var9 = _closure1_slot20;
                        var4[1] = var9;
                        var9 = _closure1_slot15;
                        var4[2] = var9;
                        var4 = var7.bind(var8)(var6, var4);
                        if(!var4) { _fun0003_ip = 139; continue _fun0003 }
 101:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var3 = 32;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.openMemberVerificationModal;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var4)(var1, var2);
                        _fun0003_ip = 145; continue _fun0003;
 139:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 145:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var7.bind(var1)(var6);
 766:
            var2 = function getTransition(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg2;
                    var3 = arg1;
                    var7 = var3.type;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0005_ip = 21; continue _fun0005 }
 19:
                    var2 = {};
 21:
                    var3 = var2.transitionTo;
                    var _closure3_slot0 = var3;
                    var8 = var2.welcomeModalChannelId;
                    var2 = var2.guildScheduledEvent;
                    var3 = _closure1_slot22;
                    var6 = var3.GUILD_STAGE_VOICE;
                    var3 = {};
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var9 = 21;
                    var10 = var10[var9];
                    var9 = undefined;
                    var9 = var11.bind(var9)(var10);
                    var9 = var9.INVITE_ACCEPT;
                    var3['source'] = var9;
                    var9 = true;
                    var3['navigationReplace'] = var9;
                    var _closure3_slot1 = var3;
                    if(!(var4 != var8)) { _fun0005_ip = 111; continue _fun0005 }
 105:
                    var3['welcomeModalChannelId'] = var8;
 111:
                    if(!(var7 === var6)) { _fun0005_ip = 125; continue _fun0005 }
 115:
                    var5 = _closure1_slot33;
                    var3['state'] = var5;
 125:
                    if(!(var4 != var2)) { _fun0005_ip = 140; continue _fun0005 }
 129:
                    var2 = var2.id;
                    var3['guildScheduledEventId'] = var2;
 140:
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var5 = arg1;
                            var3 = _closure3_slot0;
                            var1 = null;
                            if(!(var1 == var3)) { _fun0006_ip = 59; continue _fun0006 }
 16:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 22;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.transitionTo;
                            var1 = _closure3_slot1;
                            var1 = var3.bind(var4)(var5, var1);
                            _fun0006_ip = 75; continue _fun0006;
 59:
                            var4 = _closure3_slot0;
                            var3 = _closure3_slot1;
                            var2 = undefined;
                            var1 = var4.bind(var2)(var5, var3);
 75:
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var2 = var2.bind(var1)(var5, var4);
            var2 = var2.bind(var1)(var3);
 782:
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var2 = function trackInviteServerClicked(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var7 = arg3;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 39;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot27;
            var3 = var2.INVITE_SERVER_CLICKED;
            var2 = {};
            var6 = arg1;
            var2['guild_id'] = var6;
            var6 = arg2;
            var2['action'] = var6;
            var6 = null;
            var8 = var6 != var7;
            if(!var8) { _fun0007_ip = 71; continue _fun0007 }
 68:
            var6 = var7;
 71:
            var2['location_stack'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var9[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.addPostConnectionCallback;
    var _closure1_slot5 = var5;
    var5 = 2;
    var7 = var9[var5];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.isGuildScheduledEventActive;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var7 = var5.isGuildTextChannelType;
    var _closure1_slot8 = var7;
    var7 = var5.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot9 = var7;
    var7 = var5.createChannelRecord;
    var _closure1_slot10 = var7;
    var5 = var5.ChannelRecordBase;
    var _closure1_slot11 = var5;
    var5 = 4;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 5;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 6;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot14 = var5;
    var5 = 7;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot15 = var5;
    var5 = 8;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot16 = var5;
    var5 = 9;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot17 = var5;
    var5 = 10;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot18 = var5;
    var5 = 11;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot19 = var5;
    var5 = 12;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot20 = var5;
    var5 = 13;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var6 = var5.Endpoints;
    var _closure1_slot21 = var6;
    var6 = var5.ChannelTypes;
    var _closure1_slot22 = var6;
    var6 = var5.Routes;
    var _closure1_slot23 = var6;
    var6 = var5.ME;
    var _closure1_slot24 = var6;
    var6 = var5.RPCCommands;
    var _closure1_slot25 = var6;
    var6 = var5.GuildFeatures;
    var _closure1_slot26 = var6;
    var6 = var5.AnalyticEvents;
    var _closure1_slot27 = var6;
    var6 = var5.UserFlags;
    var _closure1_slot28 = var6;
    var5 = var5.Permissions;
    var _closure1_slot29 = var5;
    var5 = 14;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.StaticChannelRoute;
    var _closure1_slot30 = var5;
    var5 = 15;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.StreamTypes;
    var _closure1_slot31 = var5;
    var5 = 16;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.InviteTargetTypes;
    var _closure1_slot32 = var5;
    var5 = 17;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.STAGE_INVITE_STATE_KEY;
    var _closure1_slot33 = var5;
    var5 = null;
    var _closure1_slot34 = var5;
    var7 = function transitionToInviteChannelSync(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arguments[2];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0008_ip = 29; continue _fun0008 }
 25:
            var3 = new Array(0);
 29:
            var _closure2_slot2 = var3;
            var4 = _closure1_slot13;
            var3 = var4.addConditionalChangeListener;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = _closure1_slot13;
                    var2 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var7 = var2.bind(var4)(var1);
                    var2 = _closure1_slot20;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var10 = null;
                    var1 = var10 == var7;
                    if(var1) { _fun0009_ip = 50; continue _fun0009 }
 46:
                    var1 = var10 == var4;
 50:
                    if(var1) { _fun0009_ip = 244; continue _fun0009 }
 56:
                    var2 = var7.nsfw;
                    if(!var2) { _fun0009_ip = 74; continue _fun0009 }
 65:
                    var4 = var4.nsfwAllowed;
                    var2 = !var4;
 74:
                    if(var2) { _fun0009_ip = 130; continue _fun0009 }
 77:
                    var4 = var7.isGuildVocal;
                    var4 = var4.bind(var7)();
                    if(!var4) { _fun0009_ip = 127; continue _fun0009 }
 90:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 37;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var8.bind(var5)(var6);
                    var6 = var8.maybeOpenAgeGateForVoiceChannel;
                    var5 = _closure2_slot0;
                    var4 = var6.bind(var8)(var5);
 127:
                    var2 = var4;
 130:
                    var2 = !var2;
                    if(!var2) { _fun0009_ip = 241; continue _fun0009 }
 136:
                    var4 = _closure2_slot1;
                    var6 = var10 == var4;
                    var5 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0009_ip = 161; continue _fun0009 }
 151:
                    var6 = _closure2_slot1;
                    var4 = var6.guildScheduledEvent;
 161:
                    if(!(var10 == var4)) { _fun0009_ip = 223; continue _fun0009 }
 165:
                    var6 = _closure1_slot37;
                    var4 = {};
                    var8 = var7.getGuildId;
                    var8 = var8.bind(var7)();
                    if(!(var10 == var8)) { _fun0009_ip = 189; continue _fun0009 }
 185:
                    var8 = _closure1_slot24;
 189:
                    var4['guildId'] = var8;
                    var4['channel'] = var7;
                    var7 = _closure2_slot1;
                    var4['options'] = var7;
                    var7 = _closure2_slot2;
                    var4['analyticsLocations'] = var7;
                    var4 = var6.bind(var5)(var4);
                    var2 = false;
                    _fun0009_ip = 241; continue _fun0009;
 223:
                    var4 = _closure2_slot1;
                    var3 = function transitionToInviteEvent(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var2 = arg1;
                            var3 = var2.guildScheduledEvent;
                            var _closure4_slot0 = var3;
                            var2 = var2.welcomeModalChannelId;
                            var _closure4_slot1 = var2;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0010_ip = 50; continue _fun0010 }
 31:
                            var3 = _closure1_slot5;
                            var2 = undefined;
                            var1 = function() {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                    var5 = {};
                                    var1 = _closure4_slot0;
                                    var1 = var1.id;
                                    var5['guildScheduledEventId'] = var1;
                                    var3 = _closure4_slot1;
                                    var1 = null;
                                    if(!(var1 != var3)) { _fun0011_ip = 39; continue _fun0011 }
 29:
                                    var1 = _closure4_slot1;
                                    var5['welcomeModalChannelId'] = var1;
 39:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var1 = 34;
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
 50:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var5)(var4);
                    var2 = false;
 241:
                    var1 = var2;
 244:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot35 = var7;
    var5 = function() {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 99; continue _fun0012 }
 10:
                    var7 = var6.guild_id;
                    var4 = var6.channel_id;
                    var5 = _closure1_slot7;
                    var2 = undefined;
                    var5 = var5.bind(var2)(var6);
                    if(!var5) { _fun0012_ip = 43; continue _fun0012 }
 37:
                    var5 = null;
                    if(!(var5 == var4)) { _fun0012_ip = 87; continue _fun0012 }
 43:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 38;
                    var5 = var8[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.transitionToGuildSync;
                    var5 = var5.bind(var6)(var7);
                    SaveGenerator(address=78);
 76:
                    return var5;
 78:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!var6) { _fun0012_ip = 96; continue _fun0012 }
 84:
                    return var5;
 87:
                    var3 = _closure1_slot35;
                    var3 = var3.bind(var2)(var4);
 96:
                    return var2;
 99:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var5.bind(var1)();
    var6 = {};
    var10 = function resolveInvite(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var4;
            var9 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 35;
            var7 = var3[var1];
            var3 = undefined;
            var9 = var9.bind(var3)(var7);
            var7 = var9.isDispatching;
            var7 = var7.bind(var9)();
            if(var7) { _fun0013_ip = 138; continue _fun0013 }
 61:
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
            var1 = 36;
            var1 = var8[var1];
            var1 = var7.bind(var3)(var1);
            var4 = var1.bind(var3)(var6, var5, var4);
            var3 = var4.then;
            var1 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.invite;
                    var2 = var1.code;
                    var6 = var1.banned;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0014_ip = 84; continue _fun0014 }
 26:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 35;
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
                    _fun0014_ip = 138; continue _fun0014;
 84:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 35;
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
 138:
                    var1 = {};
                    var1['invite'] = var3;
                    var1['code'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            _fun0013_ip = 171; continue _fun0013;
 138:
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.resolve;
            var4 = var3.bind(var4)();
            var3 = var4.then;
            var2 = function() {
                var5 = _closure1_slot38;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
 171:
            return var1;
        }
    };
    var _closure1_slot38 = var10;
    var6['resolveInvite'] = var10;
    var10 = function getInviteContext(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var3 = arg2;
            var1 = {};
            var2 = arg1;
            var1['location'] = var2;
            var2 = var3.guild;
            var5 = null;
            var6 = var5 != var2;
            var4 = undefined;
            if(!var6) { _fun0015_ip = 38; continue _fun0015 }
 28:
            var6 = var3.guild;
            var4 = var6.id;
 38:
            var1['location_guild_id'] = var4;
            var4 = var3.channel;
            var6 = var5 != var4;
            var4 = undefined;
            if(!var6) { _fun0015_ip = 69; continue _fun0015 }
 59:
            var6 = var3.channel;
            var4 = var6.id;
 69:
            var1['location_channel_id'] = var4;
            var4 = var3.channel;
            var4 = var5 != var4;
            var2 = undefined;
            if(!var4) { _fun0015_ip = 100; continue _fun0015 }
 90:
            var3 = var3.channel;
            var2 = var3.type;
 100:
            var1['location_channel_type'] = var2;
            return var1;
        }
    };
    var6['getInviteContext'] = var10;
    var10 = function createInvite(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0016_ip = 20; continue _fun0016 }
 18:
            var3 = {};
 20:
            var _closure2_slot1 = var3;
            var3 = arguments[2];
            var _closure2_slot2 = var3;
            var3 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0017_ip = 278; continue _fun0017 }
 10: // try_start_0
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var2 = 40;
                        var2 = var5[var2];
                        var6 = undefined;
                        var2 = var3.bind(var6)(var2);
                        var5 = var2.HTTP;
                        var3 = var5.post;
                        var2 = {};
                        var10 = _closure1_slot21;
                        var9 = var10.INSTANT_INVITES;
                        var8 = _closure2_slot0;
                        var8 = var9.bind(var10)(var8);
                        var2['url'] = var8;
                        var8 = _closure2_slot1;
                        var2['body'] = var8;
                        var8 = {};
                        var9 = _closure2_slot2;
                        var8['location'] = var9;
                        var2['context'] = var8;
                        var8 = true;
                        var2['rejectWithError'] = var8;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address=111);
 109:
                        return var2;
 111:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0017_ip = 178; continue _fun0017 }
 117:
                        var3 = var2.body;
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var4 = 35;
                        var4 = var8[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'INSTANT_INVITE_CREATE_SUCCESS';
                        var4['type'] = var8;
                        var7 = _closure2_slot0;
                        var4['channelId'] = var7;
                        var4['invite'] = var3;
                        var4 = var5.bind(var6)(var4);
 175: // try_end0
                        return var3;
 178:
                        return var2;
 181: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 35;
                        var2 = var6[var2];
                        var3 = undefined;
                        var8 = var5.bind(var3)(var2);
                        var7 = var8.dispatch;
                        var2 = {};
                        var9 = 'INSTANT_INVITE_CREATE_FAILURE';
                        var2['type'] = var9;
                        var9 = _closure2_slot0;
                        var2['channelId'] = var9;
                        var2 = var7.bind(var8)(var2);
                        var2 = 41;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {constructor: {value: var2}});
                        var12 = var3;
                        var11 = var4;
                        var2 = new var12[var2](var11, var10);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
 278:
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
    var6['createInvite'] = var10;
    var10 = function mobileCreateInvite(arg1, arg2) {
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0018_ip = 186; continue _fun0018 }
 10:
                    var6 = _closure1_slot17;
                    var5 = var6.getInvite;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var5 = var5.bind(var6)(var4);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0018_ip = 67; continue _fun0018 }
 46:
                    var6 = var5.isExpired;
                    var6 = var6.bind(var5)();
                    if(var6) { _fun0018_ip = 67; continue _fun0018 }
 59:
                    var5 = var5.code;
                    return var5;
 67:
                    var8 = {};
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 42;
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
                        var1 = 35;
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
 158:
                    return var2;
 160:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0018_ip = 183; continue _fun0018 }
 166:
                    var4 = var4 == var2;
                    var3 = undefined;
                    if(var4) { _fun0018_ip = 180; continue _fun0018 }
 175:
                    var3 = var2.code;
 180:
                    return var3;
 183:
                    return var2;
 186:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var6['mobileCreateInvite'] = var10;
    var10 = function getAllFriendInvites(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 424; continue _fun0019 }
 12:
                    var3 = global;
                    var6 = var3.Promise;
                    var2 = var6.prototype;
                    var5 = Object.create(var2, {constructor: {value: var6}});
                    var13 = function(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 35;
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
 47:
                    return var2;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0019_ip = 421; continue _fun0019 }
 58:
                    var7 = _closure1_slot17;
                    var6 = var7.getFriendInvitesFetching;
                    var6 = var6.bind(var7)();
                    if(var6) { _fun0019_ip = 338; continue _fun0019 }
 83:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var7 = 40;
                    var7 = var6[var7];
                    var10 = undefined;
                    var7 = var8.bind(var10)(var7);
                    var9 = var7.HTTP;
                    var8 = var9.get;
                    var7 = {};
                    var11 = _closure1_slot21;
                    var11 = var11.FRIEND_INVITES;
                    var7['url'] = var11;
                    var11 = {};
                    var12 = _closure2_slot0;
                    var11['location'] = var12;
                    var7['context'] = var11;
                    var11 = false;
                    var7['rejectWithError'] = var11;
                    var7 = var8.bind(var9)(var7);
                    _closure1_slot34 = var7;
                    var7 = _closure1_slot1;
                    var11 = 35;
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
                    var6 = _closure1_slot34;
                    SaveGenerator(address=240);
 238:
                    return var6;
 240:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0019_ip = 335; continue _fun0019 }
 246:
                    var7 = var6.body;
                    var8 = null;
                    _closure1_slot34 = var8;
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
 335:
                    return var6;
 338:
                    var7 = _closure1_slot34;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0019_ip = 399; continue _fun0019 }
 348:
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
                    _fun0019_ip = 418; continue _fun0019;
 399:
                    var6 = _closure1_slot34;
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.body;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4);
 418:
                    return var3;
 421:
                    return var2;
 424:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var6['getAllFriendInvites'] = var10;
    var10 = function createFriendInvite(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 35;
            var2 = var7[var2];
            var4 = undefined;
            var8 = var3.bind(var4)(var2);
            var3 = var8.dispatch;
            var2 = {};
            var9 = 'FRIEND_INVITE_CREATE_REQUEST';
            var2['type'] = var9;
            var2 = var3.bind(var8)(var2);
            var3 = _closure1_slot0;
            var2 = 40;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var6 = _closure1_slot21;
            var6 = var6.FRIEND_INVITES;
            var2['url'] = var6;
            var6 = null;
            if(!(var6 == var5)) { _fun0020_ip = 103; continue _fun0020 }
 101:
            var5 = {};
 103:
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
                var2 = 35;
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
                var2 = 35;
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
    var6['createFriendInvite'] = var10;
    var10 = function revokeFriendInvites() {
        var2 = _closure1_slot1;
        var5 = _closure1_slot3;
        var1 = 35;
        var1 = var5[var1];
        var3 = undefined;
        var6 = var2.bind(var3)(var1);
        var2 = var6.dispatch;
        var1 = {};
        var7 = 'FRIEND_INVITE_REVOKE_REQUEST';
        var1['type'] = var7;
        var1 = var2.bind(var6)(var1);
        var2 = _closure1_slot0;
        var1 = 40;
        var1 = var5[var1];
        var1 = var2.bind(var3)(var1);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var4 = _closure1_slot21;
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
            var1 = 35;
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
    var6['revokeFriendInvites'] = var10;
    var10 = function revokeFriendInvite(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 40;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var6 = _closure1_slot21;
        var5 = var6.INVITE;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var6['revokeFriendInvite'] = var10;
    var10 = function clearInviteFromStore(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 35;
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
    var6['clearInviteFromStore'] = var10;
    var10 = function revokeInvite(arg1) {
        var7 = arg1;
        var11 = var7.code;
        var _closure2_slot0 = var11;
        var2 = var7.channel;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot1;
        var10 = _closure1_slot3;
        var2 = 43;
        var2 = var10[var2];
        var9 = undefined;
        var4 = var3.bind(var9)(var2);
        var3 = var4.delete;
        var2 = {};
        var8 = _closure1_slot21;
        var5 = var8.INVITE;
        var5 = var5.bind(var8)(var11);
        var2['url'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var5 = {};
        var8 = _closure1_slot0;
        var6 = 44;
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
            var1 = 35;
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
    var6['revokeInvite'] = var10;
    var10 = function acceptInvite(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var7 = var1.inviteKey;
            var12 = var1.context;
            var3 = var1.callback;
            var _closure2_slot0 = var3;
            var1 = var1.skipOnboarding;
            var _closure2_slot1 = var1;
            var6 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 45;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var6.bind(var4)(var1);
            var1 = var6.parseExtraDataFromInviteKey;
            var1 = var1.bind(var6)(var7);
            var _closure2_slot2 = var1;
            var11 = var1.baseCode;
            var _closure2_slot3 = var11;
            var7 = _closure1_slot12;
            var6 = var7.getSessionId;
            var8 = var6.bind(var7)();
            var7 = {};
            var13 = var7;
            var5 = copyDataProperties(var13, var12);
            var5 = var1.guildScheduledEventId;
            var1 = 'invite_guild_scheduled_event_id';
            var7[var1] = var5;
            var5 = _closure1_slot20;
            var1 = var5.getCurrentUser;
            var10 = var1.bind(var5)();
            var5 = null;
            var6 = var5 == var10;
            var1 = undefined;
            if(var6) { _fun0021_ip = 171; continue _fun0021 }
 150:
            var9 = var10.hasFlag;
            var6 = _closure1_slot28;
            var6 = var6.QUARANTINED;
            var1 = var9.bind(var10)(var6);
 171:
            if(!(var5 != var1)) { _fun0021_ip = 181; continue _fun0021 }
 175:
            if(var1) { _fun0021_ip = 333; continue _fun0021 }
 181:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 35;
            var1 = var6[var1];
            var9 = var5.bind(var4)(var1);
            var5 = var9.dispatch;
            var1 = {};
            var10 = 'INVITE_ACCEPT';
            var1['type'] = var10;
            var1['code'] = var11;
            var1 = var5.bind(var9)(var1);
            var5 = _closure1_slot0;
            var1 = 40;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var6 = var1.HTTP;
            var5 = var6.post;
            var1 = {};
            var10 = _closure1_slot21;
            var9 = var10.INVITE;
            var9 = var9.bind(var10)(var11);
            var1['url'] = var9;
            var1['context'] = var7;
            var7 = true;
            var1['oldFormErrors'] = var7;
            var7 = {};
            var7['session_id'] = var8;
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
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0022_ip = 303; continue _fun0022 }
 13:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var3 = 35;
                            var3 = var5[var3];
                            var5 = undefined;
                            var8 = var4.bind(var5)(var3);
                            var7 = var8.dispatch;
                            var4 = {};
                            var3 = 'INVITE_ACCEPT_SUCCESS';
                            var4['type'] = var3;
                            var3 = var2.body;
                            var4['invite'] = var3;
                            var9 = _closure2_slot3;
                            var4['code'] = var9;
                            var4 = var7.bind(var8)(var4);
                            var8 = _closure1_slot6;
                            var7 = var8.getGuildScheduledEvent;
                            var4 = _closure2_slot2;
                            var4 = var4.guildScheduledEventId;
                            var8 = var7.bind(var8)(var4);
                            var4 = {};
                            var12 = var2.body;
                            var13 = var4;
                            var7 = copyDataProperties(var13, var12);
                            var7 = 'guild_scheduled_event';
                            var4[var7] = var8;
                            var7 = null;
                            var8 = var7 == var4;
                            var10 = undefined;
                            if(var8) { _fun0022_ip = 143; continue _fun0022 }
 138:
                            var10 = var4.guild_id;
 143:
                            if(!(var7 == var10)) { _fun0022_ip = 178; continue _fun0022 }
 147:
                            var9 = var7 == var4;
                            var8 = undefined;
                            if(var9) { _fun0022_ip = 175; continue _fun0022 }
 156:
                            var9 = var4.guild;
                            var11 = var7 == var9;
                            var8 = undefined;
                            if(var11) { _fun0022_ip = 175; continue _fun0022 }
 170:
                            var8 = var9.id;
 175:
                            var10 = var8;
 178:
                            var8 = _closure2_slot1;
                            if(var8) { _fun0022_ip = 278; continue _fun0022 }
 185:
                            if(!(var7 != var10)) { _fun0022_ip = 278; continue _fun0022 }
 189:
                            var8 = var4.new_member;
                            if(!var8) { _fun0022_ip = 278; continue _fun0022 }
 198:
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var8 = 24;
                            var8 = var6[var8];
                            var9 = var9.bind(var5)(var8);
                            var8 = 47;
                            var8 = var6[var8];
                            var6 = var6.paths;
                            var6 = var9.bind(var5)(var8, var6);
                            SaveGenerator(address=240);
 238:
                            return var6;
 240:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(var8) { _fun0022_ip = 275; continue _fun0022 }
 246:
                            var9 = var6.default;
                            var8 = {};
                            var8['guildId'] = var10;
                            var8 = var9.bind(var5)(var8);
                            SaveGenerator(address=266);
 264:
                            return var8;
 266:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            if(!var9) { _fun0022_ip = 278; continue _fun0022 }
 272:
                            return var8;
 275:
                            return var6;
 278:
                            var6 = _closure2_slot0;
                            if(!(var7 != var6)) { _fun0022_ip = 295; continue _fun0022 }
 286:
                            var3 = _closure2_slot0;
                            var3 = var3.bind(var5)(var4);
 295:
                            var2 = var2.body;
                            return var2;
 303:
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
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var3 = arg1;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 35;
                    var2 = var4[var2];
                    var4 = undefined;
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.dispatch;
                    var2 = {};
                    var7 = 'INVITE_ACCEPT_FAILURE';
                    var2['type'] = var7;
                    var7 = _closure2_slot3;
                    var2['code'] = var7;
                    var7 = {};
                    var10 = var3.body;
                    var8 = null;
                    var11 = var8 == var10;
                    var9 = undefined;
                    if(var11) { _fun0023_ip = 79; continue _fun0023 }
 74:
                    var9 = var10.message;
 79:
                    var7['message'] = var9;
                    var9 = var3.body;
                    var10 = var8 == var9;
                    var8 = undefined;
                    if(var10) { _fun0023_ip = 102; continue _fun0023 }
 97:
                    var8 = var9.code;
 102:
                    var7['code'] = var8;
                    var2['error'] = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 48;
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
            _fun0021_ip = 390; continue _fun0021;
 333:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 46;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var13 = function(arg1, arg2) {
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
            var14 = var3;
            var2 = new var14[var4](var13, var12);
            var1 = var2 instanceof Object ? var2 : var3;
 390:
            return var1;
        }
    };
    var6['acceptInvite'] = var10;
    var10 = function acceptInviteAndTransitionToInviteChannel(arg1) {
        var1 = arg1;
        var3 = this;
        var7 = var1.inviteKey;
        var6 = var1.context;
        var2 = var1.analyticsLocations;
        var _closure2_slot0 = var2;
        var2 = var1.callback;
        var _closure2_slot1 = var2;
        var5 = var1.skipOnboarding;
        var2 = var3.acceptInvite;
        var1 = {};
        var1['inviteKey'] = var7;
        var1['context'] = var6;
        var1['skipOnboarding'] = var5;
        var4 = function callback(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var3 = arg1;
                var1 = var3.channel;
                var4 = null;
                if(!(var4 != var1)) { _fun0024_ip = 70; continue _fun0024 }
 14:
                var2 = _closure1_slot36;
                var7 = undefined;
                var6 = var2.bind(var7)(var3);
                var5 = _closure1_slot35;
                var1 = var3.channel;
                var2 = var1.id;
                var1 = _closure2_slot0;
                if(!(var4 == var1)) { _fun0024_ip = 59; continue _fun0024 }
 53:
                var1 = new Array(0);
                _fun0024_ip = 63; continue _fun0024;
 59:
                var1 = _closure2_slot0;
 63:
                var1 = var5.bind(var7)(var2, var6, var1);
 70:
                var2 = _closure2_slot1;
                if(!(var4 != var2)) { _fun0024_ip = 92; continue _fun0024 }
 81:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
 92:
                var1 = undefined;
                return var1;
            }
        };
        var1['callback'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var6['acceptInviteAndTransitionToInviteChannel'] = var10;
    var10 = function transitionToInvite(arg1, arg2, arg3) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var2 = arg3;
            var7 = var3.channel;
            var9 = var3.guild;
            var10 = null;
            if(!(var10 != var9)) { _fun0025_ip = 64; continue _fun0025 }
 25:
            var8 = var9.features;
            if(!(var10 != var8)) { _fun0025_ip = 64; continue _fun0025 }
 35:
            var6 = var8.includes;
            var5 = _closure1_slot26;
            var5 = var5.HUB;
            var5 = var6.bind(var8)(var5);
            if(var5) { _fun0025_ip = 299; continue _fun0025 }
 64:
            var11 = _closure1_slot0;
            var6 = _closure1_slot3;
            var5 = 18;
            var6 = var6[var5];
            var5 = undefined;
            var13 = var11.bind(var5)(var6);
            var12 = var13.hasFlag;
            var6 = var3.flags;
            var14 = var10 != var6;
            var11 = 0;
            if(!var14) { _fun0025_ip = 112; continue _fun0025 }
 109:
            var11 = var6;
 112:
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var6 = 19;
            var6 = var15[var6];
            var6 = var14.bind(var5)(var6);
            var6 = var6.GuildInviteFlags;
            var6 = var6.IS_APPLICATION_BYPASS;
            var6 = var12.bind(var13)(var11, var6);
            if(!(var10 != var9)) { _fun0025_ip = 226; continue _fun0025 }
 154:
            if(var6) { _fun0025_ip = 226; continue _fun0025 }
 157:
            var11 = _closure1_slot0;
            var6 = _closure1_slot3;
            var12 = 50;
            var6 = var6[var12];
            var11 = var11.bind(var5)(var6);
            var6 = var11.inviteGuildHasPendingMemberDisabledVerification;
            var6 = var6.bind(var11)(var9);
            if(!var6) { _fun0025_ip = 226; continue _fun0025 }
 191:
            var11 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var12];
            var12 = var11.bind(var5)(var6);
            var11 = var12.openVerificationModalOrTransitionToApplication;
            var6 = var9.id;
            var6 = var11.bind(var12)(var6);
            _fun0025_ip = 332; continue _fun0025;
 226:
            if(!(var10 != var7)) { _fun0025_ip = 332; continue _fun0025 }
 230:
            var6 = _closure1_slot36;
            var6 = var6.bind(var5)(var3);
            if(!(var10 != var4)) { _fun0025_ip = 249; continue _fun0025 }
 243:
            var6['transitionTo'] = var4;
 249:
            if(!(var10 != var2)) { _fun0025_ip = 259; continue _fun0025 }
 253:
            var6['muteOnJoinVoiceChannel'] = var2;
 259:
            var4 = _closure1_slot37;
            var2 = {};
            if(!(var10 == var9)) { _fun0025_ip = 275; continue _fun0025 }
 269:
            var8 = _closure1_slot24;
            _fun0025_ip = 280; continue _fun0025;
 275:
            var8 = var9.id;
 280:
            var2['guildId'] = var8;
            var2['channel'] = var7;
            var2['options'] = var6;
            var2 = var4.bind(var5)(var2);
            _fun0025_ip = 332; continue _fun0025;
 299:
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 49;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.onOpenHubInvite;
            var1 = var1.bind(var2)(var3);
 332:
            var1 = undefined;
            return var1;
        }
    };
    var6['transitionToInvite'] = var10;
    var10 = function transitionToInviteSync(arg1, arg2, arg3) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
            var1 = arg1;
            var4 = this;
            var3 = var1.channel;
            var2 = null;
            if(!(var2 != var3)) { _fun0026_ip = 99; continue _fun0026 }
 17:
            var3 = _closure1_slot36;
            var2 = undefined;
            var7 = var3.bind(var2)(var1);
            var3 = var4.transitionToInviteChannelSync;
            var1 = var1.channel;
            var2 = var1.id;
            var1 = {};
            var8 = var1;
            var5 = copyDataProperties(var8, var7);
            var6 = arg3;
            var5 = 'intent';
            var1[var5] = var6;
            var6 = arg2;
            var5 = 'transitionTo';
            var1[var5] = var6;
            var6 = true;
            var5 = 'forceTransition';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
 99:
            var1 = undefined;
            return var1;
        }
    };
    var6['transitionToInviteSync'] = var10;
    var10 = function openNativeAppModal(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 51;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.openNativeAppModal;
        var2 = _closure1_slot25;
        var3 = var2.INVITE_BROWSER;
        var2 = arg1;
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var6['openNativeAppModal'] = var10;
    var10 = function openApp(arg1, arg2, arg3, arg4, arg5) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var5 = arg1;
            var8 = arg2;
            var16 = arg3;
            var _closure2_slot0 = var5;
            var10 = null;
            var1 = var10 != var5;
            var11 = null;
            if(!var1) { _fun0027_ip = 62; continue _fun0027 }
 26:
            var4 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 45;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.parseExtraDataFromInviteKey;
            var11 = var1.bind(var2)(var5);
 62:
            var2 = var10 == var11;
            var1 = undefined;
            var12 = undefined;
            if(var2) { _fun0027_ip = 79; continue _fun0027 }
 73:
            var12 = var11.baseCode;
 79:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var4 = 35;
            var9 = var6[var4];
            var14 = var7.bind(var1)(var9);
            var13 = var14.dispatch;
            var9 = {};
            var15 = 'INVITE_APP_OPENING';
            var9['type'] = var15;
            var9['code'] = var5;
            var9 = var13.bind(var14)(var9);
            var9 = 52;
            var6 = var6[var9];
            var6 = var7.bind(var1)(var6);
            var6 = var6.ua;
            if(!(var10 != var6)) { _fun0027_ip = 213; continue _fun0027 }
 150:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var6 = var6[var9];
            var6 = var7.bind(var1)(var6);
            var7 = var6.ua;
            var6 = var7.toLowerCase;
            var13 = var6.bind(var7)();
            var7 = var13.indexOf;
            var6 = 'googlebot';
            var7 = var7.bind(var13)(var6);
            var6 = -1;
            if(!(!(var7 > var6))) { _fun0027_ip = 738; continue _fun0027 }
 213:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var6 = var6[var9];
            var6 = var7.bind(var1)(var6);
            var6 = var6.os;
            var13 = var10 == var6;
            var7 = undefined;
            if(var13) { _fun0027_ip = 251; continue _fun0027 }
 245:
            var7 = var6.family;
 251:
            var6 = 'Android';
            if(!(var6 !== var7)) { _fun0027_ip = 397; continue _fun0027 }
 264:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var6 = var6[var9];
            var6 = var7.bind(var1)(var6);
            var6 = var6.os;
            var9 = var10 == var6;
            var7 = undefined;
            if(var9) { _fun0027_ip = 302; continue _fun0027 }
 296:
            var7 = var6.family;
 302:
            var6 = 'iOS';
            if(!(var6 !== var7)) { _fun0027_ip = 397; continue _fun0027 }
 312:
            var6 = var10 != var8;
            var9 = '';
            if(!var6) { _fun0027_ip = 338; continue _fun0027 }
 323:
            var7 = _closure1_slot23;
            var6 = var7.INVITE_PROXY;
            var9 = var6.bind(var7)(var8);
 338:
            var6 = 0;
            var7 = var9[var6];
            var6 = '#';
            var8 = var9;
            if(!(var6 === var7)) { _fun0027_ip = 368; continue _fun0027 }
 355:
            var7 = var9.slice;
            var6 = 1;
            var8 = var7.bind(var9)(var6);
 368:
            var6 = global;
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = 'discord://';
            var8 = var7.bind(var6)(var8);
            _fun0027_ip = 699; continue _fun0027;
 397:
            if(!(var10 == var12)) { _fun0027_ip = 433; continue _fun0027 }
 401:
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 53;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getDefaultDynamicLinkTemplate;
            var9 = var6.bind(var7)();
            _fun0027_ip = 464; continue _fun0027;
 433:
            var7 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 53;
            var6 = var13[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getInviteDynamicLinkTemplate;
            var9 = var6.bind(var7)(var12);
 464:
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var6 = 54;
            var7 = var14[var6];
            var13 = var13.bind(var1)(var7);
            var7 = var13.generateAttemptId;
            var13 = var7.bind(var13)();
            var7 = _closure1_slot1;
            var6 = var14[var6];
            var7 = var7.bind(var1)(var6);
            var6 = {};
            var14 = 'friend_invite';
            var17 = 2;
            var15 = arg5;
            if(!(var17 !== var15)) { _fun0027_ip = 529; continue _fun0027 }
 525:
            var14 = 'invite';
 529:
            var6['utmSource'] = var14;
            var6['fingerprint'] = var16;
            var14 = arg4;
            var6['username'] = var14;
            var6['attemptId'] = var13;
            var14 = var10 == var11;
            var10 = undefined;
            if(var14) { _fun0027_ip = 566; continue _fun0027 }
 560:
            var10 = var11.guildScheduledEventId;
 566:
            var6['event'] = var10;
            var10 = global;
            var10 = var10.HermesInternal;
            var11 = var10.concat;
            var10 = 'https://discord.com/api/download/mobile?invite_code=';
            var10 = var11.bind(var10)(var12);
            var6['iosFallbackLink'] = var10;
            var8 = var7.bind(var1)(var9, var6);
            var9 = _closure1_slot1;
            var17 = _closure1_slot3;
            var7 = 39;
            var7 = var17[var7];
            var11 = var9.bind(var1)(var7);
            var10 = var11.track;
            var7 = _closure1_slot27;
            var9 = var7.DEEP_LINK_CLICKED;
            var7 = {};
            var15 = _closure1_slot0;
            var14 = 55;
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
 699:
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var6 = 56;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.launch;
            var3 = function(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 35;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var5 = {};
                    var2 = arg1;
                    if(var2) { _fun0028_ip = 64; continue _fun0028 }
 38:
                    var2 = 'INVITE_APP_NOT_OPENED';
                    var5['type'] = var2;
                    var2 = _closure2_slot0;
                    var5['code'] = var2;
                    var2 = var5;
                    _fun0028_ip = 86; continue _fun0028;
 64:
                    var6 = 'INVITE_APP_OPENED';
                    var5['type'] = var6;
                    var6 = _closure2_slot0;
                    var5['code'] = var6;
                    var2 = var5;
 86:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var8, var3);
            _fun0027_ip = 781; continue _fun0027;
 738:
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
 781:
            return var1;
        }
    };
    var6['openApp'] = var10;
    var6['transitionToInviteChannelSync'] = var7;
    var6['trackInviteServerClicked'] = var2;
    var7 = 57;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'actions/InstantInviteActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['transitionToGuildFromEventInvite'] = var5;
    var4 = function trackInviteEmbedActioned(arg1, arg2) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var1 = arg1;
            var7 = arg2;
            var6 = var1.invite;
            var8 = var1.action;
            var10 = var1.inviter_id;
            var9 = var1.invite_message_id;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 39;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot27;
            var3 = var2.INVITE_EMBED_ACTIONED;
            var2 = {};
            var2['action'] = var8;
            var8 = var6.code;
            var2['invite_code'] = var8;
            var12 = var6.type;
            var6 = null;
            var11 = var6 == var12;
            var8 = undefined;
            if(var11) { _fun0029_ip = 110; continue _fun0029 }
 101:
            var11 = var12.toString;
            var8 = var11.bind(var12)();
 110:
            var2['invite_type'] = var8;
            var11 = var6 != var10;
            var8 = null;
            if(!var11) { _fun0029_ip = 127; continue _fun0029 }
 124:
            var8 = var10;
 127:
            var2['inviter_id'] = var8;
            var10 = var6 != var9;
            var8 = null;
            if(!var10) { _fun0029_ip = 144; continue _fun0029 }
 141:
            var8 = var9;
 144:
            var2['invite_message_id'] = var8;
            var8 = var6 != var7;
            var6 = null;
            if(!var8) { _fun0029_ip = 161; continue _fun0029 }
 158:
            var6 = var7;
 161:
            var2['location_stack'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackInviteEmbedActioned'] = var4;
    var3['trackInviteServerClicked'] = var2;
    return var1;
})();