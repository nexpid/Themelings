// app/actions/InstantInviteActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var9;
    var1 = function generateAcceptInviteOptions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = {};
            var4 = var3.target_type;
            var2 = _closure1_slot34;
            var2 = var2.STREAM;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot34;
            var2 = var2.EMBEDDED_APPLICATION;
            if(!(var2 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot34;
            var2 = var2.ROLE_SUBSCRIPTIONS_PURCHASE;
            if(!(var2 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3.target_type;
            var1['targetType'] = var2;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var2 = var3.target_type;
            var1['targetType'] = var2;
            var4 = var3.target_application;
            var2 = null;
            var6 = var2 == var4;
            var2 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var4.id;
case 8:
            var1['targetApplicationId'] = var2;
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var2 = var3.target_type;
            var1['targetType'] = var2;
            var4 = var3.target_user;
            var2 = null;
            var6 = var2 == var4;
            var2 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var4.id;
case 10:
            var1['targetUserId'] = var2;
case 6:
            var8 = _closure1_slot16;
            var7 = var8.getGuild;
            var9 = var3.guild;
            var4 = null;
            var10 = var4 == var9;
            var2 = undefined;
            var6 = undefined;
            if(var10) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var9.id;
case 12:
            var6 = var7.bind(var8)(var6);
            var7 = var4 != var6;
            var6 = !var7;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var3.new_member;
case 14:
            if(!var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.channel;
            var6 = var4 != var7;
case 16:
            if(!var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = _closure1_slot8;
            var7 = var3.channel;
            var7 = var7.type;
            var6 = var8.bind(var2)(var7);
case 18:
            if(!var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var6 = var3.channel;
            var6 = var6.id;
            var1['welcomeModalChannelId'] = var6;
case 20:
            var6 = var3.guild_scheduled_event;
            if(!(var4 != var6)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var6 = var3.guild_scheduled_event;
            var1['guildScheduledEvent'] = var6;
case 22:
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var9 = 19;
            var6 = var6[var9];
            var14 = var7.bind(var2)(var6);
            var13 = var14.hasFlag;
            var6 = var3.flags;
            var7 = var4 != var6;
            var12 = 0;
            if(!var7) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var12 = var6;
case 24:
            var7 = _closure1_slot0;
            var6 = _closure1_slot3;
            var10 = 20;
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
            if(!var11) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var8 = var9;
case 26:
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
            if(var4) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var2 = var3.id;
case 28:
            var1['inviterUserId'] = var2;
            return var1;
        }
    };
    var _closure1_slot38 = var1;
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
            if(!(var9 === var1)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var9 = new Array(0);
case 30:
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
            if(var11) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var12 = var8.features;
            var11 = var12.has;
            var8 = _closure1_slot26;
            var8 = var8.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            var3 = var11.bind(var12)(var8);
case 32:
            var8 = var4;
            if(!(var10 == var8)) { _fun0002_ip = 34; continue _fun0002 }
case 11:
            var8 = {};
case 34:
            var11 = var8.targetUserId;
            _closure2_slot4 = var11;
            var14 = var8.targetType;
            _closure2_slot5 = var14;
            var11 = var8.targetApplicationId;
            _closure2_slot6 = var11;
            var12 = var8.isGuestInvite;
            _closure2_slot7 = var12;
            var8 = var8.isApplicationBypassInvite;
            if(var12) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            if(var8) { _fun0002_ip = 35; continue _fun0002 }
case 37:
            if(!(var10 != var4)) { _fun0002_ip = 38; continue _fun0002 }
case 15:
            var8 = var4.forceTransition;
            if(var8) { _fun0002_ip = 35; continue _fun0002 }
case 38:
            if(!var3) { _fun0002_ip = 35; continue _fun0002 }
case 39:
            var8 = _closure1_slot19;
            var3 = var8.getGuildId;
            var3 = var3.bind(var8)();
            if(!(var3 === var7)) { _fun0002_ip = 40; continue _fun0002 }
case 35:
            var16 = var5.type;
            var12 = _closure1_slot13;
            var8 = var12.getChannel;
            var3 = var5.id;
            var15 = var8.bind(var12)(var3);
            var8 = var10 == var4;
            var3 = undefined;
            if(var8) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var3 = var4.targetType;
case 41:
            if(!(var10 == var3)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var12 = _closure1_slot9;
            var8 = var12.has;
            var3 = var5.type;
            var3 = var8.bind(var12)(var3);
            if(var3) { _fun0002_ip = 43; continue _fun0002 }
case 45:
            var8 = _closure1_slot0;
            var12 = _closure1_slot3;
            var3 = 21;
            var3 = var12[var3];
            var8 = var8.bind(var1)(var3);
            var3 = var8.canSeeOnboardingHome;
            var3 = var3.bind(var8)(var7);
            if(!var3) { _fun0002_ip = 43; continue _fun0002 }
case 46:
            var3 = _closure1_slot32;
            var12 = var3.GUILD_HOME;
            _fun0002_ip = 29; continue _fun0002;
case 43:
            var13 = _closure1_slot13;
            var8 = var13.getChannel;
            var3 = var5.id;
            var17 = var8.bind(var13)(var3);
            var13 = _closure1_slot18;
            var8 = var13.can;
            var3 = _closure1_slot29;
            var3 = var3.VIEW_CHANNEL;
            var3 = var8.bind(var13)(var3, var17);
            if(var3) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var17 = _closure1_slot14;
            var13 = var17.getDefaultChannel;
            var3 = _closure1_slot29;
            var8 = var3.CREATE_INSTANT_INVITE;
            var3 = true;
            var8 = var13.bind(var17)(var7, var3, var8);
            var13 = var10 == var8;
            var3 = undefined;
            if(var13) { _fun0002_ip = 49; continue _fun0002 }
case 50:
            var3 = var8.id;
case 49:
            if(!(var10 == var3)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var3 = var5.id;
case 51:
            _fun0002_ip = 53; continue _fun0002;
case 47:
            var3 = var5.id;
case 53:
            var12 = var3;
case 29:
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
            if(var8) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var13 = _closure1_slot0;
            var16 = _closure1_slot3;
            var8 = 34;
            var8 = var16[var8];
            var13 = var13.bind(var1)(var8);
            var8 = var13.isActivityInTextSupportedForChannel;
            var8 = var8.bind(var13)(var15);
            if(!var8) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var13 = _closure1_slot34;
            var13 = var13.EMBEDDED_APPLICATION;
            var8 = var14 === var13;
case 56:
            if(!var8) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var8 = var10 != var11;
case 58:
            if(!var8) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var8 = 23;
            var8 = var14[var8];
            var13 = var13.bind(var1)(var8);
            var8 = var13.transitionTo;
            var15 = _closure1_slot23;
            var14 = var15.CHANNEL;
            if(!(var10 == var7)) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var7 = _closure1_slot24;
case 62:
            var7 = var14.bind(var15)(var7, var12);
            var7 = var8.bind(var13)(var7);
            var8 = _closure1_slot1;
            var13 = _closure1_slot3;
            var7 = 30;
            var7 = var13[var7];
            var8 = var8.bind(var1)(var7);
            var7 = {};
            var7['channelId'] = var12;
            var7['applicationId'] = var11;
            var12 = var10 == var4;
            var11 = undefined;
            if(var12) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var11 = var4.intent;
case 64:
            var7['intent'] = var11;
            var11 = var10 == var4;
            var10 = undefined;
            if(var11) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var10 = var4.inviterUserId;
case 66:
            var7['inviterUserId'] = var10;
            var7['analyticsLocations'] = var9;
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var9 = 31;
            var9 = var11[var9];
            var9 = var10.bind(var1)(var9);
            var9 = var9.CommandOrigin;
            var9 = var9.CHAT;
            var7['commandOrigin'] = var9;
            var7 = var8.bind(var1)(var7);
            _fun0002_ip = 60; continue _fun0002;
case 54:
            var7 = _closure1_slot5;
            var6 = function() {
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 25;
                var3 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = 24;
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
                                if(var2) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                                var2 = _closure2_slot2;
                                var7 = null;
                                var2 = var7 != var2;
                                if(!var2) { _fun0004_ip = 70; continue _fun0004 }
case 71:
                                var3 = _closure2_slot2;
                                var2 = var3.muteOnJoinVoiceChannel;
case 70:
                                if(!var2) { _fun0004_ip = 72; continue _fun0004 }
case 73:
                                var4 = _closure1_slot1;
                                var8 = _closure1_slot3;
                                var3 = 27;
                                var3 = var8[var3];
                                var6 = undefined;
                                var5 = var4.bind(var6)(var3);
                                var4 = var5.setSelfMute;
                                var3 = _closure1_slot0;
                                var2 = 28;
                                var2 = var8[var2];
                                var2 = var3.bind(var6)(var2);
                                var2 = var2.MediaEngineContextTypes;
                                var3 = var2.DEFAULT;
                                var2 = true;
                                var2 = var4.bind(var5)(var3, var2);
case 72:
                                var4 = _closure4_slot0;
                                var3 = var4.selectVoiceChannel;
                                var2 = _closure2_slot8;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure2_slot5;
                                var2 = _closure1_slot34;
                                var2 = var2.STREAM;
                                var2 = var3 === var2;
                                if(!var2) { _fun0004_ip = 74; continue _fun0004 }
case 6:
                                var3 = _closure2_slot4;
                                var2 = var7 != var3;
case 74:
                                if(!var2) { _fun0004_ip = 75; continue _fun0004 }
case 76:
                                var4 = _closure1_slot2;
                                var3 = _closure1_slot3;
                                var2 = 29;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.watchStreamAndTransitionToStream;
                                var2 = {};
                                var6 = _closure1_slot33;
                                var6 = var6.GUILD;
                                var2['streamType'] = var6;
                                var6 = _closure2_slot4;
                                var2['ownerId'] = var6;
                                var6 = _closure2_slot0;
                                var2['guildId'] = var6;
                                var6 = _closure2_slot8;
                                var2['channelId'] = var6;
                                var2 = var3.bind(var4)(var2);
case 75:
                                var3 = _closure2_slot5;
                                var2 = _closure1_slot34;
                                var2 = var2.EMBEDDED_APPLICATION;
                                var2 = var3 === var2;
                                if(!var2) { _fun0004_ip = 42; continue _fun0004 }
case 77:
                                var3 = _closure2_slot6;
                                var2 = var7 != var3;
case 42:
                                if(!var2) { _fun0004_ip = 78; continue _fun0004 }
case 41:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var2 = 23;
                                var2 = var4[var2];
                                var4 = undefined;
                                var6 = var3.bind(var4)(var2);
                                var3 = var6.transitionTo;
                                var10 = _closure1_slot23;
                                var9 = var10.CHANNEL;
                                var2 = _closure2_slot0;
                                if(!(var7 == var2)) { _fun0004_ip = 79; continue _fun0004 }
case 80:
                                var8 = _closure1_slot24;
                                _fun0004_ip = 81; continue _fun0004;
case 79:
                                var8 = _closure2_slot0;
case 81:
                                var2 = _closure2_slot8;
                                var2 = var9.bind(var10)(var8, var2);
                                var2 = var3.bind(var6)(var2);
                                var3 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var2 = 30;
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
                                if(var8) { _fun0004_ip = 82; continue _fun0004 }
case 83:
                                var8 = _closure2_slot2;
                                var6 = var8.intent;
case 82:
                                var2['intent'] = var6;
                                var6 = _closure2_slot2;
                                var7 = var7 == var6;
                                var6 = undefined;
                                if(var7) { _fun0004_ip = 84; continue _fun0004 }
case 85:
                                var7 = _closure2_slot2;
                                var6 = var7.inviterUserId;
case 84:
                                var2['inviterUserId'] = var6;
                                var6 = _closure2_slot3;
                                var2['analyticsLocations'] = var6;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var5 = 31;
                                var5 = var7[var5];
                                var5 = var6.bind(var4)(var5);
                                var5 = var5.CommandOrigin;
                                var5 = var5.CHAT;
                                var2['commandOrigin'] = var5;
                                var2 = var3.bind(var4)(var2);
case 78:
                                var2 = undefined;
                                return var2;
case 68:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var3 = 26;
                                var3 = var4[var3];
                                var4 = undefined;
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.connectAndOpen;
                                var7 = _closure2_slot1;
                                var3 = _closure1_slot11;
                                var3 = var7 instanceof var3;
                                if(var3) { _fun0004_ip = 86; continue _fun0004 }
case 87:
                                var7 = _closure1_slot10;
                                var3 = _closure2_slot1;
                                var3 = var7.bind(var4)(var3);
                                _fun0004_ip = 88; continue _fun0004;
case 86:
                                var3 = _closure2_slot1;
case 88:
                                var3 = var5.bind(var6)(var3);
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var2 = 23;
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
                        if(var3) { _fun0003_ip = 89; continue _fun0003 }
case 90:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 32;
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
                        if(!var4) { _fun0003_ip = 89; continue _fun0003 }
case 91:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var3 = 33;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.openMemberVerificationModal;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var4)(var1, var2);
                        _fun0003_ip = 92; continue _fun0003;
case 89:
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 92:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var7.bind(var1)(var6);
case 60:
            var2 = function getTransition(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg2;
                    var3 = arg1;
                    var7 = var3.type;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0005_ip = 93; continue _fun0005 }
case 94:
                    var2 = {};
case 93:
                    var3 = var2.transitionTo;
                    var _closure3_slot0 = var3;
                    var8 = var2.welcomeModalChannelId;
                    var2 = var2.guildScheduledEvent;
                    var3 = _closure1_slot22;
                    var6 = var3.GUILD_STAGE_VOICE;
                    var3 = {};
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var9 = 22;
                    var10 = var10[var9];
                    var9 = undefined;
                    var9 = var11.bind(var9)(var10);
                    var9 = var9.INVITE_ACCEPT;
                    var3['source'] = var9;
                    var9 = true;
                    var3['navigationReplace'] = var9;
                    var _closure3_slot1 = var3;
                    if(!(var4 != var8)) { _fun0005_ip = 95; continue _fun0005 }
case 96:
                    var3['welcomeModalChannelId'] = var8;
case 95:
                    if(!(var7 === var6)) { _fun0005_ip = 97; continue _fun0005 }
case 98:
                    var5 = _closure1_slot35;
                    var3['state'] = var5;
case 97:
                    if(!(var4 != var2)) { _fun0005_ip = 99; continue _fun0005 }
case 100:
                    var2 = var2.id;
                    var3['guildScheduledEventId'] = var2;
case 99:
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var5 = arg1;
                            var3 = _closure3_slot0;
                            var1 = null;
                            if(!(var1 == var3)) { _fun0006_ip = 101; continue _fun0006 }
case 102:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 23;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.transitionTo;
                            var1 = _closure3_slot1;
                            var1 = var3.bind(var4)(var5, var1);
                            _fun0006_ip = 103; continue _fun0006;
case 101:
                            var4 = _closure3_slot0;
                            var3 = _closure3_slot1;
                            var2 = undefined;
                            var1 = var4.bind(var2)(var5, var3);
case 103:
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var2 = var2.bind(var1)(var5, var4);
            var2 = var2.bind(var1)(var3);
case 40:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var2 = function trackInviteServerClicked(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var7 = arg3;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 40;
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
            if(!var8) { _fun0007_ip = 104; continue _fun0007 }
case 105:
            var6 = var7;
case 104:
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
    var6 = var5.Permissions;
    var _closure1_slot29 = var6;
    var5 = var5.AbortCodes;
    var _closure1_slot30 = var5;
    var5 = 14;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.AgeGateSource;
    var _closure1_slot31 = var5;
    var5 = 15;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.StaticChannelRoute;
    var _closure1_slot32 = var5;
    var5 = 16;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.StreamTypes;
    var _closure1_slot33 = var5;
    var5 = 17;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.InviteTargetTypes;
    var _closure1_slot34 = var5;
    var5 = 18;
    var5 = var9[var5];
    var5 = var8.bind(var1)(var5);
    var5 = var5.STAGE_INVITE_STATE_KEY;
    var _closure1_slot35 = var5;
    var5 = null;
    var _closure1_slot36 = var5;
    var7 = function transitionToInviteChannelSync(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arguments[2];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0008_ip = 90; continue _fun0008 }
case 106:
            var3 = new Array(0);
case 90:
            var _closure2_slot2 = var3;
            var4 = _closure1_slot13;
            var3 = var4.addConditionalChangeListener;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure1_slot13;
                    var2 = var4.getChannel;
                    var1 = _closure2_slot0;
                    var7 = var2.bind(var4)(var1);
                    var2 = _closure1_slot20;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var10 = null;
                    var1 = var10 == var7;
                    if(var1) { _fun0009_ip = 107; continue _fun0009 }
case 108:
                    var1 = var10 == var4;
case 107:
                    if(var1) { _fun0009_ip = 109; continue _fun0009 }
case 7:
                    var2 = var7.nsfw;
                    if(!var2) { _fun0009_ip = 110; continue _fun0009 }
case 111:
                    var4 = var4.nsfwAllowed;
                    var2 = !var4;
case 110:
                    if(var2) { _fun0009_ip = 112; continue _fun0009 }
case 113:
                    var4 = var7.isGuildVocal;
                    var4 = var4.bind(var7)();
                    if(!var4) { _fun0009_ip = 114; continue _fun0009 }
case 115:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var5 = 38;
                    var6 = var6[var5];
                    var5 = undefined;
                    var8 = var8.bind(var5)(var6);
                    var6 = var8.maybeOpenAgeGateForVoiceChannel;
                    var5 = _closure2_slot0;
                    var4 = var6.bind(var8)(var5);
case 114:
                    var2 = var4;
case 112:
                    var2 = !var2;
                    if(!var2) { _fun0009_ip = 116; continue _fun0009 }
case 117:
                    var4 = _closure2_slot1;
                    var6 = var10 == var4;
                    var5 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0009_ip = 118; continue _fun0009 }
case 119:
                    var6 = _closure2_slot1;
                    var4 = var6.guildScheduledEvent;
case 118:
                    if(!(var10 == var4)) { _fun0009_ip = 120; continue _fun0009 }
case 121:
                    var6 = _closure1_slot39;
                    var4 = {};
                    var8 = var7.getGuildId;
                    var8 = var8.bind(var7)();
                    if(!(var10 == var8)) { _fun0009_ip = 122; continue _fun0009 }
case 123:
                    var8 = _closure1_slot24;
case 122:
                    var4['guildId'] = var8;
                    var4['channel'] = var7;
                    var7 = _closure2_slot1;
                    var4['options'] = var7;
                    var7 = _closure2_slot2;
                    var4['analyticsLocations'] = var7;
                    var4 = var6.bind(var5)(var4);
                    var2 = false;
                    _fun0009_ip = 116; continue _fun0009;
case 120:
                    var4 = _closure2_slot1;
                    var3 = function transitionToInviteEvent(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.guildScheduledEvent;
                            var _closure4_slot0 = var3;
                            var2 = var2.welcomeModalChannelId;
                            var _closure4_slot1 = var2;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0010_ip = 107; continue _fun0010 }
case 124:
                            var3 = _closure1_slot5;
                            var2 = undefined;
                            var1 = function() {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                    var5 = {};
                                    var1 = _closure4_slot0;
                                    var1 = var1.id;
                                    var5['guildScheduledEventId'] = var1;
                                    var3 = _closure4_slot1;
                                    var1 = null;
                                    if(!(var1 != var3)) { _fun0011_ip = 73; continue _fun0011 }
case 90:
                                    var1 = _closure4_slot1;
                                    var5['welcomeModalChannelId'] = var1;
case 73:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var1 = 35;
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
case 107:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var5)(var4);
                    var2 = false;
case 116:
                    var1 = var2;
case 109:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot37 = var7;
    var5 = function() {
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 9; continue _fun0012 }
case 125:
                    var7 = var6.guild_id;
                    var4 = var6.channel_id;
                    var5 = _closure1_slot7;
                    var2 = undefined;
                    var5 = var5.bind(var2)(var6);
                    if(!var5) { _fun0012_ip = 126; continue _fun0012 }
case 127:
                    var5 = null;
                    if(!(var5 == var4)) { _fun0012_ip = 128; continue _fun0012 }
case 126:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 39;
                    var5 = var8[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.transitionToGuildSync;
                    var5 = var5.bind(var6)(var7);
                    SaveGenerator(address=78);
case 129:
                    return var5;
case 130:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!var6) { _fun0012_ip = 131; continue _fun0012 }
case 132:
                    return var5;
case 128:
                    var3 = _closure1_slot37;
                    var3 = var3.bind(var2)(var4);
case 131:
                    return var2;
case 9:
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
case 0:
            var6 = arg1;
            var5 = arg2;
            var4 = arg3;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var4;
            var9 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 36;
            var7 = var3[var1];
            var3 = undefined;
            var9 = var9.bind(var3)(var7);
            var7 = var9.isDispatching;
            var7 = var7.bind(var9)();
            if(var7) { _fun0013_ip = 133; continue _fun0013 }
case 134:
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
            var1 = 37;
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
                    if(!(var1 == var3)) { _fun0014_ip = 132; continue _fun0014 }
case 71:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 36;
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
                    _fun0014_ip = 133; continue _fun0014;
case 132:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 36;
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
case 133:
                    var1 = {};
                    var1['invite'] = var3;
                    var1['code'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            _fun0013_ip = 135; continue _fun0013;
case 133:
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.resolve;
            var4 = var3.bind(var4)();
            var3 = var4.then;
            var2 = function() {
                var5 = _closure1_slot40;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 135:
            return var1;
        }
    };
    var _closure1_slot40 = var10;
    var6['resolveInvite'] = var10;
    var10 = function getInviteContext(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg2;
            var1 = {};
            var2 = arg1;
            var1['location'] = var2;
            var2 = var3.guild;
            var5 = null;
            var6 = var5 != var2;
            var4 = undefined;
            if(!var6) { _fun0015_ip = 136; continue _fun0015 }
case 3:
            var6 = var3.guild;
            var4 = var6.id;
case 136:
            var1['location_guild_id'] = var4;
            var4 = var3.channel;
            var6 = var5 != var4;
            var4 = undefined;
            if(!var6) { _fun0015_ip = 137; continue _fun0015 }
case 138:
            var6 = var3.channel;
            var4 = var6.id;
case 137:
            var1['location_channel_id'] = var4;
            var4 = var3.channel;
            var4 = var5 != var4;
            var2 = undefined;
            if(!var4) { _fun0015_ip = 139; continue _fun0015 }
case 140:
            var3 = var3.channel;
            var2 = var3.type;
case 139:
            var1['location_channel_type'] = var2;
            return var1;
        }
    };
    var6['getInviteContext'] = var10;
    var10 = function createInvite(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0016_ip = 141; continue _fun0016 }
case 142:
            var3 = {};
case 141:
            var _closure2_slot1 = var3;
            var3 = arguments[2];
            var _closure2_slot2 = var3;
            var3 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0017_ip = 143; continue _fun0017 }
case 125: // try_start_0
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var2 = 41;
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
case 144:
                        return var2;
case 95:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0017_ip = 145; continue _fun0017 }
case 146:
                        var3 = var2.body;
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var4 = 36;
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
case 147: // try_end0
                        return var3;
case 145:
                        return var2;
case 148: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 36;
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
                        var2 = 42;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {constructor: {value: var2}});
                        var12 = var3;
                        var11 = var4;
                        var2 = new var12[var2](var11, var10);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
case 143:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0018_ip = 149; continue _fun0018 }
case 125:
                    var6 = _closure1_slot17;
                    var5 = var6.getInvite;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var5 = var5.bind(var6)(var4);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0018_ip = 137; continue _fun0018 }
case 108:
                    var6 = var5.isExpired;
                    var6 = var6.bind(var5)();
                    if(var6) { _fun0018_ip = 137; continue _fun0018 }
case 101:
                    var5 = var5.code;
                    return var5;
case 137:
                    var8 = {};
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 43;
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
                        var1 = 36;
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
case 150:
                    return var2;
case 74:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0018_ip = 151; continue _fun0018 }
case 152:
                    var4 = var4 == var2;
                    var3 = undefined;
                    if(var4) { _fun0018_ip = 153; continue _fun0018 }
case 147:
                    var3 = var2.code;
case 153:
                    return var3;
case 151:
                    return var2;
case 149:
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
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 154; continue _fun0019 }
case 155:
                    var3 = global;
                    var6 = var3.Promise;
                    var2 = var6.prototype;
                    var5 = Object.create(var2, {constructor: {value: var6}});
                    var13 = function(arg1) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 36;
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
case 156:
                    return var2;
case 157:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0019_ip = 158; continue _fun0019 }
case 159:
                    var7 = _closure1_slot17;
                    var6 = var7.getFriendInvitesFetching;
                    var6 = var6.bind(var7)();
                    if(var6) { _fun0019_ip = 160; continue _fun0019 }
case 161:
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var7 = 41;
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
                    _closure1_slot36 = var7;
                    var7 = _closure1_slot1;
                    var11 = 36;
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
                    var6 = _closure1_slot36;
                    SaveGenerator(address=240);
case 75:
                    return var6;
case 162:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0019_ip = 163; continue _fun0019 }
case 164:
                    var7 = var6.body;
                    var8 = null;
                    _closure1_slot36 = var8;
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
case 163:
                    return var6;
case 160:
                    var7 = _closure1_slot36;
                    var6 = null;
                    if(!(var6 == var7)) { _fun0019_ip = 26; continue _fun0019 }
case 165:
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
                    _fun0019_ip = 166; continue _fun0019;
case 26:
                    var6 = _closure1_slot36;
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.body;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4);
case 166:
                    return var3;
case 158:
                    return var2;
case 154:
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
case 0:
            var5 = arg1;
            var3 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 36;
            var2 = var7[var2];
            var4 = undefined;
            var8 = var3.bind(var4)(var2);
            var3 = var8.dispatch;
            var2 = {};
            var9 = 'FRIEND_INVITE_CREATE_REQUEST';
            var2['type'] = var9;
            var2 = var3.bind(var8)(var2);
            var3 = _closure1_slot0;
            var2 = 41;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var6 = _closure1_slot21;
            var6 = var6.FRIEND_INVITES;
            var2['url'] = var6;
            var6 = null;
            if(!(var6 == var5)) { _fun0020_ip = 167; continue _fun0020 }
case 91:
            var5 = {};
case 167:
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
                var2 = 36;
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
                var2 = 36;
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
        var1 = 36;
        var1 = var5[var1];
        var3 = undefined;
        var6 = var2.bind(var3)(var1);
        var2 = var6.dispatch;
        var1 = {};
        var7 = 'FRIEND_INVITE_REVOKE_REQUEST';
        var1['type'] = var7;
        var1 = var2.bind(var6)(var1);
        var2 = _closure1_slot0;
        var1 = 41;
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
            var1 = 36;
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
        var1 = 41;
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
        var1 = 36;
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
        var2 = 44;
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
        var6 = 45;
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
            var1 = 36;
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
case 0:
            var3 = arg1;
            var7 = var3.inviteKey;
            var1 = var3.context;
            var4 = var3.callback;
            var _closure2_slot0 = var4;
            var3 = var3.skipOnboarding;
            var _closure2_slot1 = var3;
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var4 = 46;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.parseExtraDataFromInviteKey;
            var5 = var5.bind(var6)(var7);
            var _closure2_slot2 = var5;
            var11 = var5.baseCode;
            var _closure2_slot3 = var11;
            var7 = _closure1_slot12;
            var6 = var7.getSessionId;
            var8 = var6.bind(var7)();
            var7 = {};
            var14 = var7;
            var13 = var1;
            var6 = copyDataProperties(var14, var13);
            var6 = var5.guildScheduledEventId;
            var5 = 'invite_guild_scheduled_event_id';
            var7[var5] = var6;
            var6 = _closure1_slot20;
            var5 = var6.getCurrentUser;
            var12 = var5.bind(var6)();
            var6 = null;
            var9 = var6 == var12;
            var5 = undefined;
            if(var9) { _fun0021_ip = 168; continue _fun0021 }
case 169:
            var10 = var12.hasFlag;
            var9 = _closure1_slot28;
            var9 = var9.QUARANTINED;
            var5 = var10.bind(var12)(var9);
case 168:
            if(!(var6 != var5)) { _fun0021_ip = 12; continue _fun0021 }
case 145:
            if(var5) { _fun0021_ip = 29; continue _fun0021 }
case 12:
            var6 = _closure1_slot0;
            var9 = _closure1_slot3;
            var5 = 38;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.shouldShowReverifyForLargeGuildId;
            var1 = var1.location_guild_id;
            var1 = var5.bind(var6)(var1);
            if(var1) { _fun0021_ip = 170; continue _fun0021 }
case 171:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 36;
            var1 = var6[var1];
            var9 = var5.bind(var4)(var1);
            var5 = var9.dispatch;
            var1 = {};
            var10 = 'INVITE_ACCEPT';
            var1['type'] = var10;
            var1['code'] = var11;
            var1 = var5.bind(var9)(var1);
            var5 = _closure1_slot0;
            var1 = 41;
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
case 0:
                            StartGenerator();
                            var2 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0022_ip = 172; continue _fun0022 }
case 69:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var3 = 36;
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
                            if(var8) { _fun0022_ip = 34; continue _fun0022 }
case 133:
                            var10 = var4.guild_id;
case 34:
                            if(!(var7 == var10)) { _fun0022_ip = 145; continue _fun0022 }
case 173:
                            var9 = var7 == var4;
                            var8 = undefined;
                            if(var9) { _fun0022_ip = 147; continue _fun0022 }
case 174:
                            var9 = var4.guild;
                            var11 = var7 == var9;
                            var8 = undefined;
                            if(var11) { _fun0022_ip = 147; continue _fun0022 }
case 175:
                            var8 = var9.id;
case 147:
                            var10 = var8;
case 145:
                            var8 = _closure2_slot1;
                            if(var8) { _fun0022_ip = 143; continue _fun0022 }
case 123:
                            if(!(var7 != var10)) { _fun0022_ip = 143; continue _fun0022 }
case 122:
                            var8 = var4.new_member;
                            if(!var8) { _fun0022_ip = 143; continue _fun0022 }
case 176:
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var8 = 25;
                            var8 = var6[var8];
                            var9 = var9.bind(var5)(var8);
                            var8 = 49;
                            var8 = var6[var8];
                            var6 = var6.paths;
                            var6 = var9.bind(var5)(var8, var6);
                            SaveGenerator(address=240);
case 75:
                            return var6;
case 162:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(var8) { _fun0022_ip = 177; continue _fun0022 }
case 164:
                            var9 = var6.default;
                            var8 = {};
                            var8['guildId'] = var10;
                            var8 = var9.bind(var5)(var8);
                            SaveGenerator(address=266);
case 178:
                            return var8;
case 179:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            if(!var9) { _fun0022_ip = 143; continue _fun0022 }
case 180:
                            return var8;
case 177:
                            return var6;
case 143:
                            var6 = _closure2_slot0;
                            if(!(var7 != var6)) { _fun0022_ip = 181; continue _fun0022 }
case 182:
                            var3 = _closure2_slot0;
                            var3 = var3.bind(var5)(var4);
case 181:
                            var2 = var2.body;
                            return var2;
case 172:
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
case 0:
                    var3 = arg1;
                    var1 = var3.body;
                    var8 = null;
                    var2 = var8 == var1;
                    var4 = undefined;
                    var5 = undefined;
                    if(var2) { _fun0023_ip = 71; continue _fun0023 }
case 93:
                    var5 = var1.code;
case 71:
                    var2 = _closure1_slot30;
                    var2 = var2.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED;
                    if(!(var5 === var2)) { _fun0023_ip = 132; continue _fun0023 }
case 126:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 48;
                    var2 = var6[var2];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.openAgeGateModal;
                    var2 = _closure1_slot31;
                    var2 = var2.JOIN_LARGE_GUILD_UNDERAGE;
                    var2 = var5.bind(var6)(var2);
case 132:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var2 = 36;
                    var2 = var6[var2];
                    var6 = var5.bind(var4)(var2);
                    var5 = var6.dispatch;
                    var2 = {};
                    var7 = 'INVITE_ACCEPT_FAILURE';
                    var2['type'] = var7;
                    var7 = _closure2_slot3;
                    var2['code'] = var7;
                    var7 = {};
                    var10 = var3.body;
                    var11 = var8 == var10;
                    var9 = undefined;
                    if(var11) { _fun0023_ip = 169; continue _fun0023 }
case 183:
                    var9 = var10.message;
case 169:
                    var7['message'] = var9;
                    var9 = var3.body;
                    var10 = var8 == var9;
                    var8 = undefined;
                    if(var10) { _fun0023_ip = 184; continue _fun0023 }
case 135:
                    var8 = var9.code;
case 184:
                    var7['code'] = var8;
                    var2['error'] = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 50;
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
            _fun0021_ip = 185; continue _fun0021;
case 170:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var5 = 48;
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.openAgeGateModal;
            var5 = _closure1_slot31;
            var5 = var5.JOIN_LARGE_GUILD_UNDERAGE;
            var5 = var6.bind(var7)(var5);
            var5 = global;
            var7 = var5.Promise;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var14 = function(arg1, arg2) {
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
            var15 = var6;
            var5 = new var15[var7](var14, var13);
            var1 = var5 instanceof Object ? var5 : var6;
case 185:
            _fun0021_ip = 186; continue _fun0021;
case 29:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 47;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var14 = function(arg1, arg2) {
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
            var15 = var3;
            var2 = new var15[var4](var14, var13);
            var1 = var2 instanceof Object ? var2 : var3;
case 186:
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
case 0:
                var3 = arg1;
                var1 = var3.channel;
                var4 = null;
                if(!(var4 != var1)) { _fun0024_ip = 4; continue _fun0024 }
case 187:
                var2 = _closure1_slot38;
                var7 = undefined;
                var6 = var2.bind(var7)(var3);
                var5 = _closure1_slot37;
                var1 = var3.channel;
                var2 = var1.id;
                var1 = _closure2_slot0;
                if(!(var4 == var1)) { _fun0024_ip = 101; continue _fun0024 }
case 188:
                var1 = new Array(0);
                _fun0024_ip = 189; continue _fun0024;
case 101:
                var1 = _closure2_slot0;
case 189:
                var1 = var5.bind(var7)(var2, var6, var1);
case 4:
                var2 = _closure2_slot1;
                if(!(var4 != var2)) { _fun0024_ip = 190; continue _fun0024 }
case 191:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
case 190:
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
case 0:
            var3 = arg1;
            var4 = arg2;
            var2 = arg3;
            var7 = var3.channel;
            var9 = var3.guild;
            var10 = null;
            if(!(var10 != var9)) { _fun0025_ip = 192; continue _fun0025 }
case 106:
            var8 = var9.features;
            if(!(var10 != var8)) { _fun0025_ip = 192; continue _fun0025 }
case 193:
            var6 = var8.includes;
            var5 = _closure1_slot26;
            var5 = var5.HUB;
            var5 = var6.bind(var8)(var5);
            if(var5) { _fun0025_ip = 45; continue _fun0025 }
case 192:
            var11 = _closure1_slot0;
            var6 = _closure1_slot3;
            var5 = 19;
            var6 = var6[var5];
            var5 = undefined;
            var13 = var11.bind(var5)(var6);
            var12 = var13.hasFlag;
            var6 = var3.flags;
            var14 = var10 != var6;
            var11 = 0;
            if(!var14) { _fun0025_ip = 2; continue _fun0025 }
case 144:
            var11 = var6;
case 2:
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var6 = 20;
            var6 = var15[var6];
            var6 = var14.bind(var5)(var6);
            var6 = var6.GuildInviteFlags;
            var6 = var6.IS_APPLICATION_BYPASS;
            var6 = var12.bind(var13)(var11, var6);
            if(!(var10 != var9)) { _fun0025_ip = 194; continue _fun0025 }
case 195:
            if(var6) { _fun0025_ip = 194; continue _fun0025 }
case 196:
            var11 = _closure1_slot0;
            var6 = _closure1_slot3;
            var12 = 52;
            var6 = var6[var12];
            var11 = var11.bind(var5)(var6);
            var6 = var11.inviteGuildHasPendingMemberDisabledVerification;
            var6 = var6.bind(var11)(var9);
            if(!var6) { _fun0025_ip = 194; continue _fun0025 }
case 197:
            var11 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var12];
            var12 = var11.bind(var5)(var6);
            var11 = var12.openVerificationModalOrTransitionToApplication;
            var6 = var9.id;
            var6 = var11.bind(var12)(var6);
            _fun0025_ip = 198; continue _fun0025;
case 194:
            if(!(var10 != var7)) { _fun0025_ip = 198; continue _fun0025 }
case 199:
            var6 = _closure1_slot38;
            var6 = var6.bind(var5)(var3);
            if(!(var10 != var4)) { _fun0025_ip = 200; continue _fun0025 }
case 201:
            var6['transitionTo'] = var4;
case 200:
            if(!(var10 != var2)) { _fun0025_ip = 77; continue _fun0025 }
case 202:
            var6['muteOnJoinVoiceChannel'] = var2;
case 77:
            var4 = _closure1_slot39;
            var2 = {};
            if(!(var10 == var9)) { _fun0025_ip = 177; continue _fun0025 }
case 203:
            var8 = _closure1_slot24;
            _fun0025_ip = 22; continue _fun0025;
case 177:
            var8 = var9.id;
case 22:
            var2['guildId'] = var8;
            var2['channel'] = var7;
            var2['options'] = var6;
            var2 = var4.bind(var5)(var2);
            _fun0025_ip = 198; continue _fun0025;
case 45:
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.onOpenHubInvite;
            var1 = var1.bind(var2)(var3);
case 198:
            var1 = undefined;
            return var1;
        }
    };
    var6['transitionToInvite'] = var10;
    var10 = function transitionToInviteSync(arg1, arg2, arg3) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var4 = this;
            var3 = var1.channel;
            var2 = null;
            if(!(var2 != var3)) { _fun0026_ip = 9; continue _fun0026 }
case 204:
            var3 = _closure1_slot38;
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
case 9:
            var1 = undefined;
            return var1;
        }
    };
    var6['transitionToInviteSync'] = var10;
    var10 = function openNativeAppModal(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 53;
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
case 0:
            var5 = arg1;
            var8 = arg2;
            var16 = arg3;
            var _closure2_slot0 = var5;
            var10 = null;
            var1 = var10 != var5;
            var11 = null;
            if(!var1) { _fun0027_ip = 205; continue _fun0027 }
case 71:
            var4 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 46;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.parseExtraDataFromInviteKey;
            var11 = var1.bind(var2)(var5);
case 205:
            var2 = var10 == var11;
            var1 = undefined;
            var12 = undefined;
            if(var2) { _fun0027_ip = 206; continue _fun0027 }
case 207:
            var12 = var11.baseCode;
case 206:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var4 = 36;
            var9 = var6[var4];
            var14 = var7.bind(var1)(var9);
            var13 = var14.dispatch;
            var9 = {};
            var15 = 'INVITE_APP_OPENING';
            var9['type'] = var15;
            var9['code'] = var5;
            var9 = var13.bind(var14)(var9);
            var9 = 54;
            var6 = var6[var9];
            var6 = var7.bind(var1)(var6);
            var6 = var6.ua;
            if(!(var10 != var6)) { _fun0027_ip = 39; continue _fun0027 }
case 208:
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
            if(!(!(var7 > var6))) { _fun0027_ip = 209; continue _fun0027 }
case 39:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var6 = var6[var9];
            var6 = var7.bind(var1)(var6);
            var6 = var6.os;
            var13 = var10 == var6;
            var7 = undefined;
            if(var13) { _fun0027_ip = 210; continue _fun0027 }
case 211:
            var7 = var6.family;
case 210:
            var6 = 'Android';
            if(!(var6 !== var7)) { _fun0027_ip = 212; continue _fun0027 }
case 178:
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var6 = var6[var9];
            var6 = var7.bind(var1)(var6);
            var6 = var6.os;
            var9 = var10 == var6;
            var7 = undefined;
            if(var9) { _fun0027_ip = 213; continue _fun0027 }
case 214:
            var7 = var6.family;
case 213:
            var6 = 'iOS';
            if(!(var6 !== var7)) { _fun0027_ip = 212; continue _fun0027 }
case 215:
            var6 = var10 != var8;
            var9 = '';
            if(!var6) { _fun0027_ip = 160; continue _fun0027 }
case 24:
            var7 = _closure1_slot23;
            var6 = var7.INVITE_PROXY;
            var9 = var6.bind(var7)(var8);
case 160:
            var6 = 0;
            var7 = var9[var6];
            var6 = '#';
            var8 = var9;
            if(!(var6 === var7)) { _fun0027_ip = 216; continue _fun0027 }
case 217:
            var7 = var9.slice;
            var6 = 1;
            var8 = var7.bind(var9)(var6);
case 216:
            var6 = global;
            var6 = var6.HermesInternal;
            var7 = var6.concat;
            var6 = 'discord://';
            var8 = var7.bind(var6)(var8);
            _fun0027_ip = 218; continue _fun0027;
case 212:
            if(!(var10 == var12)) { _fun0027_ip = 84; continue _fun0027 }
case 219:
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 55;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getDefaultDynamicLinkTemplate;
            var9 = var6.bind(var7)();
            _fun0027_ip = 220; continue _fun0027;
case 84:
            var7 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 55;
            var6 = var13[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.getInviteDynamicLinkTemplate;
            var9 = var6.bind(var7)(var12);
case 220:
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var6 = 56;
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
            if(!(var17 !== var15)) { _fun0027_ip = 221; continue _fun0027 }
case 222:
            var14 = 'invite';
case 221:
            var6['utmSource'] = var14;
            var6['fingerprint'] = var16;
            var14 = arg4;
            var6['username'] = var14;
            var6['attemptId'] = var13;
            var14 = var10 == var11;
            var10 = undefined;
            if(var14) { _fun0027_ip = 223; continue _fun0027 }
case 224:
            var10 = var11.guildScheduledEventId;
case 223:
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
            var7 = 40;
            var7 = var17[var7];
            var11 = var9.bind(var1)(var7);
            var10 = var11.track;
            var7 = _closure1_slot27;
            var9 = var7.DEEP_LINK_CLICKED;
            var7 = {};
            var15 = _closure1_slot0;
            var14 = 57;
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
case 218:
            var7 = _closure1_slot1;
            var9 = _closure1_slot3;
            var6 = 58;
            var6 = var9[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.launch;
            var3 = function(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 36;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.dispatch;
                    var5 = {};
                    var2 = arg1;
                    if(var2) { _fun0028_ip = 192; continue _fun0028 }
case 136:
                    var2 = 'INVITE_APP_NOT_OPENED';
                    var5['type'] = var2;
                    var2 = _closure2_slot0;
                    var5['code'] = var2;
                    var2 = var5;
                    _fun0028_ip = 225; continue _fun0028;
case 192:
                    var6 = 'INVITE_APP_OPENED';
                    var5['type'] = var6;
                    var6 = _closure2_slot0;
                    var5['code'] = var6;
                    var2 = var5;
case 225:
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var8, var3);
            _fun0027_ip = 226; continue _fun0027;
case 209:
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
case 226:
            return var1;
        }
    };
    var6['openApp'] = var10;
    var6['transitionToInviteChannelSync'] = var7;
    var6['trackInviteServerClicked'] = var2;
    var7 = 59;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'actions/InstantInviteActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['transitionToGuildFromEventInvite'] = var5;
    var4 = function trackInviteEmbedActioned(arg1, arg2) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var7 = arg2;
            var6 = var1.invite;
            var8 = var1.action;
            var10 = var1.inviter_id;
            var9 = var1.invite_message_id;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 40;
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
            if(var11) { _fun0029_ip = 227; continue _fun0029 }
case 91:
            var11 = var12.toString;
            var8 = var11.bind(var12)();
case 227:
            var2['invite_type'] = var8;
            var11 = var6 != var10;
            var8 = null;
            if(!var11) { _fun0029_ip = 114; continue _fun0029 }
case 228:
            var8 = var10;
case 114:
            var2['inviter_id'] = var8;
            var10 = var6 != var9;
            var8 = null;
            if(!var10) { _fun0029_ip = 229; continue _fun0029 }
case 11:
            var8 = var9;
case 229:
            var2['invite_message_id'] = var8;
            var8 = var6 != var7;
            var6 = null;
            if(!var8) { _fun0029_ip = 118; continue _fun0029 }
case 150:
            var6 = var7;
case 118:
            var2['location_stack'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackInviteEmbedActioned'] = var4;
    var3['trackInviteServerClicked'] = var2;
    return var1;
})();