// app/modules/user_profile/native/UserProfileModeratorActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot12 = var7;
    var4 = var4.Permissions;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['paddingBottom'] = var10;
    var4['cardContainer'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['cardTitle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 55;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileModeratorActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileModeratorActions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var21 = var1.user;
            var _closure2_slot0 = var21;
            var16 = var1.currentUser;
            var25 = var1.guildId;
            var _closure2_slot1 = var25;
            var3 = var1.channelId;
            var _closure2_slot2 = var3;
            var4 = var1.showUserProfile;
            var _closure2_slot3 = var4;
            var13 = var1.style;
            var6 = undefined;
            var _closure2_slot13 = var6;
            var _closure2_slot14 = var6;
            var1 = _closure1_slot16;
            var11 = var1.bind(var6)();
            var12 = _closure1_slot0;
            var27 = _closure1_slot3;
            var1 = 12;
            var1 = var27[var1];
            var4 = var12.bind(var6)(var1);
            var1 = var4.useUserProfileAnalyticsContext;
            var1 = var1.bind(var4)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot4 = var1;
            var23 = _closure1_slot1;
            var1 = 13;
            var1 = var27[var1];
            var1 = var23.bind(var6)(var1);
            var1 = var1.hideActionSheet;
            var _closure2_slot5 = var1;
            var1 = 14;
            var1 = var27[var1];
            var4 = var23.bind(var6)(var1);
            var1 = {};
            var5 = var21.id;
            var1['userId'] = var5;
            var1['guildId'] = var25;
            var1 = var4.bind(var6)(var1);
            var19 = var1.voiceState;
            var _closure2_slot6 = var19;
            var9 = var1.voiceChannel;
            var _closure2_slot7 = var9;
            var35 = 15;
            var1 = var27[var35];
            var7 = var12.bind(var6)(var1);
            var5 = var7.useStateFromStores;
            var1 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var26 = var5.bind(var7)(var4, var1);
            var _closure2_slot8 = var26;
            var1 = var27[var35];
            var7 = var12.bind(var6)(var1);
            var5 = var7.useStateFromStores;
            var1 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var4 = _closure1_slot8;
                var3 = var4.getMember;
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var14 = var5.bind(var7)(var4, var1);
            var _closure2_slot9 = var14;
            var4 = var21.id;
            var1 = var16.id;
            var4 = var4 === var1;
            var _closure2_slot10 = var4;
            var1 = var27[var35];
            var15 = var12.bind(var6)(var1);
            var10 = var15.useStateFromStores;
            var1 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var1;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot2;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = var4.isThread;
                    var2 = var3.bind(var4)();
case 2:
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var10 = var10.bind(var15)(var7, var5);
            var5 = var27[var35];
            var15 = var12.bind(var6)(var5);
            var7 = var15.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot2;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                    var3 = var4.isForumPost;
                    var2 = var3.bind(var4)();
case 2:
                    var1 = var1 != var2;
                    if(!var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1 = var2;
case 4:
                    return var1;
                }
            };
            var7 = var7.bind(var15)(var5, var1);
            var _closure2_slot11 = var7;
            var1 = 16;
            var1 = var27[var1];
            var5 = var12.bind(var6)(var1);
            var1 = var5.useCanRemoveThreadMember;
            var5 = var1.bind(var5)(var3);
            var1 = var27[var35];
            var17 = var12.bind(var6)(var1);
            var15 = var17.useStateFromStoresObject;
            var1 = _closure1_slot10;
            var12 = new Array(1);
            var12[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 17;
                    var3 = var9[var5];
                    var7 = undefined;
                    var11 = var6.bind(var7)(var3);
                    var10 = var11.canKickMember;
                    var8 = _closure2_slot0;
                    var3 = _closure2_slot8;
                    var10 = var10.bind(var11)(var8, var3);
                    var1['canKickUser'] = var10;
                    var5 = var9[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.canBanMember;
                    var5 = var5.bind(var6)(var8, var3);
                    var1['canBanUser'] = var5;
                    var5 = null;
                    var3 = var5 != var3;
                    if(!var3) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var11 = _closure1_slot10;
                    var10 = var11.canManageUser;
                    var6 = _closure1_slot13;
                    var9 = var6.MANAGE_NICKNAMES;
                    var8 = _closure2_slot0;
                    var6 = _closure2_slot8;
                    var3 = var10.bind(var11)(var9, var8, var6);
case 6:
                    var1['canChangeNick'] = var3;
                    var3 = _closure2_slot8;
                    var3 = var5 != var3;
                    if(!var3) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var11 = _closure1_slot10;
                    var10 = var11.canManageUser;
                    var6 = _closure1_slot13;
                    var9 = var6.MANAGE_ROLES;
                    var8 = _closure2_slot0;
                    var6 = _closure2_slot8;
                    var3 = var10.bind(var11)(var9, var8, var6);
case 8:
                    var1['canManageUserRoles'] = var3;
                    var3 = _closure2_slot8;
                    var3 = var5 != var3;
                    if(!var3) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var10 = _closure1_slot10;
                    var9 = var10.can;
                    var6 = _closure1_slot13;
                    var8 = var6.MANAGE_ROLES;
                    var6 = _closure2_slot8;
                    var3 = var9.bind(var10)(var8, var6);
case 10:
                    var1['canManageGuildRoles'] = var3;
                    var3 = _closure2_slot8;
                    var3 = var5 != var3;
                    if(!var3) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var11 = _closure1_slot10;
                    var10 = var11.canManageUser;
                    var6 = _closure1_slot13;
                    var9 = var6.MANAGE_GUILD;
                    var8 = _closure2_slot0;
                    var6 = _closure2_slot8;
                    var3 = var10.bind(var11)(var9, var8, var6);
case 12:
                    var1['canManageGuild'] = var3;
                    var3 = _closure2_slot8;
                    var3 = var5 != var3;
                    if(!var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var10 = _closure1_slot10;
                    var9 = var10.canManageUser;
                    var5 = _closure1_slot13;
                    var8 = var5.MODERATE_MEMBERS;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot8;
                    var3 = var9.bind(var10)(var8, var6, var5);
case 14:
                    var1['canModerateMembers'] = var3;
                    var5 = _closure1_slot10;
                    var8 = var5.can;
                    var3 = _closure1_slot13;
                    var6 = var3.MOVE_MEMBERS;
                    var4 = _closure2_slot7;
                    var6 = var8.bind(var5)(var6, var4);
                    var1['canMoveMembers'] = var6;
                    var8 = var5.can;
                    var6 = var3.MUTE_MEMBERS;
                    var6 = var8.bind(var5)(var6, var4);
                    var1['canMuteMembers'] = var6;
                    var6 = var5.can;
                    var3 = var3.DEAFEN_MEMBERS;
                    var3 = var6.bind(var5)(var3, var4);
                    var1['canDeafenMembers'] = var3;
                    var3 = var5.can;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 18;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                    var2 = var3.bind(var5)(var2, var4);
                    var1['canModerateStage'] = var2;
                    return var1;
                }
            };
            var20 = var15.bind(var17)(var12, var1);
            var15 = var20.canKickUser;
            var12 = var20.canBanUser;
            var30 = var20.canChangeNick;
            var1 = var20.canManageUserRoles;
            var28 = var20.canManageGuildRoles;
            var17 = var20.canManageGuild;
            var29 = var20.canModerateMembers;
            var18 = var20.canMoveMembers;
            var _closure2_slot12 = var18;
            var24 = var20.canMuteMembers;
            var22 = var20.canDeafenMembers;
            var31 = var20.canModerateStage;
            var20 = 19;
            var20 = var27[var20];
            var23 = var23.bind(var6)(var20);
            var20 = var21.id;
            var20 = var23.bind(var6)(var25, var20);
            if(!var29) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var29 = var15;
case 16:
            if(!var29) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var29 = var12;
case 18:
            if(var29) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var29 = var17;
case 20:
            if(var29) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var29 = var1;
case 22:
            var17 = _closure1_slot1;
            var1 = _closure1_slot3;
            var23 = 20;
            var23 = var1[var23];
            var23 = var17.bind(var6)(var23);
            var37 = var23.bind(var6)(var9);
            var32 = 21;
            var1 = var1[var32];
            var25 = var17.bind(var6)(var1);
            var23 = var21.id;
            var1 = null;
            var27 = var1 == var9;
            var17 = undefined;
            if(var27) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var17 = var9.id;
case 24:
            var27 = var25.bind(var6)(var23, var17);
            var17 = var1 != var9;
            if(!var17) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var25 = var1 == var19;
            var23 = undefined;
            if(var25) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var23 = var19.channelId;
case 28:
            var17 = var1 != var23;
case 26:
            var33 = var1 != var9;
            if(!var33) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var23 = var9.isGuildStageVoice;
            var33 = var23.bind(var9)();
case 30:
            var23 = var1 != var9;
            if(!var23) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var9 = !var33;
            if(var9) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var34 = _closure1_slot0;
            var25 = _closure1_slot3;
            var25 = var25[var32];
            var25 = var34.bind(var6)(var25);
            var25 = var25.RequestToSpeakStates;
            var25 = var25.ON_STAGE;
            var9 = var27 === var25;
case 34:
            var23 = var9;
case 32:
            var34 = _closure1_slot0;
            var9 = _closure1_slot3;
            var25 = var9[var35];
            var39 = var34.bind(var6)(var25);
            var38 = var39.useStateFromStores;
            var25 = _closure1_slot4;
            var36 = new Array(1);
            var36[0] = var25;
            var25 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot4;
                    var3 = var4.getPermissionsForUser;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var6 = _closure2_slot7;
                    var1 = null;
                    var6 = var1 == var6;
                    var1 = undefined;
                    if(var6) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var5 = _closure2_slot7;
                    var1 = var5.id;
case 36:
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = var1.speaker;
                    return var1;
                }
            };
            var25 = var38.bind(var39)(var36, var25);
            var9 = var9[var35];
            var36 = var34.bind(var6)(var9);
            var35 = var36.useStateFromStoresArray;
            var9 = _closure1_slot6;
            var34 = new Array(4);
            var34[0] = var9;
            var9 = _closure1_slot11;
            var34[1] = var9;
            var9 = _closure1_slot9;
            var34[2] = var9;
            var9 = _closure1_slot10;
            var34[3] = var9;
            var9 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot12;
                    if(!var1) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var3 = _closure2_slot7;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0006_ip = 40; continue _fun0006 }
case 38:
                    var1 = new Array(0);
                    _fun0006_ip = 41; continue _fun0006;
case 40:
                    var6 = _closure1_slot6;
                    var5 = var6.getChannels;
                    var4 = _closure2_slot1;
                    var4 = var5.bind(var6)(var4);
                    var3 = _closure1_slot7;
                    var5 = var4[var3];
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var1 = arg1;
                            var8 = var1.channel;
                            var2 = var8.id;
                            var1 = _closure2_slot7;
                            var1 = var1.id;
                            var1 = var2 !== var1;
                            if(!var1) { _fun0007_ip = 15; continue _fun0007 }
case 3:
                            var2 = _closure2_slot10;
                            var6 = _closure1_slot10;
                            var5 = var6.can;
                            var3 = _closure1_slot13;
                            if(var2) { _fun0007_ip = 10; continue _fun0007 }
case 42:
                            var2 = var3.MOVE_MEMBERS;
                            var2 = var5.bind(var6)(var2, var8);
                            if(!var2) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                            var10 = _closure1_slot10;
                            var9 = var10.can;
                            var7 = _closure1_slot13;
                            var7 = var7.CONNECT;
                            var7 = var9.bind(var10)(var7, var8);
                            if(var7) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                            var11 = _closure1_slot2;
                            var10 = _closure1_slot3;
                            var9 = 23;
                            var10 = var10[var9];
                            var9 = undefined;
                            var11 = var11.bind(var9)(var10);
                            var10 = var11.can;
                            var9 = {};
                            var13 = _closure1_slot13;
                            var13 = var13.CONNECT;
                            var9['permission'] = var13;
                            var12 = _closure2_slot0;
                            var9['user'] = var12;
                            var9['context'] = var8;
                            var7 = var10.bind(var11)(var9);
case 45:
                            var2 = var7;
case 43:
                            if(!var2) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var7 = 22;
                            var9 = var9[var7];
                            var7 = undefined;
                            var11 = var10.bind(var7)(var9);
                            var10 = var11.isChannelFull;
                            var9 = _closure1_slot11;
                            var7 = _closure1_slot9;
                            var7 = var10.bind(var11)(var8, var9, var7);
                            var2 = !var7;
case 47:
                            _fun0007_ip = 49; continue _fun0007;
case 10:
                            var3 = var3.CONNECT;
                            var3 = var5.bind(var6)(var3, var8);
                            if(!var3) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var5 = 22;
                            var6 = var6[var5];
                            var5 = undefined;
                            var7 = var7.bind(var5)(var6);
                            var6 = var7.isChannelFull;
                            var5 = _closure1_slot11;
                            var4 = _closure1_slot9;
                            var4 = var6.bind(var7)(var8, var5, var4);
                            var3 = !var4;
case 50:
                            var2 = var3;
case 49:
                            var1 = var2;
case 15:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.channel;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 41:
                    return var1;
                }
            };
            var9 = var35.bind(var36)(var34, var9);
            _closure2_slot13 = var9;
            if(!(var1 != var26)) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var9 = new Array(0);
            var34 = var33;
            if(!var34) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var34 = var31;
case 54:
            if(!var34) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var34 = var25;
case 56:
            if(!var34) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var35 = var9.push;
            var39 = _closure1_slot15;
            var36 = _closure1_slot0;
            var38 = _closure1_slot3;
            var34 = 24;
            var34 = var38[var34];
            var34 = var36.bind(var6)(var34);
            var38 = var34.UserProfileFormRow;
            var36 = {};
            var40 = var21.id;
            var34 = var16.id;
            if(!(var40 !== var34)) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var42 = _closure1_slot0;
            var43 = _closure1_slot3;
            var34 = 25;
            var40 = var43[var34];
            var40 = var42.bind(var6)(var40);
            var41 = var40.intl;
            var40 = var41.string;
            var34 = var43[var34];
            var34 = var42.bind(var6)(var34);
            var34 = var34.t;
            var34 = var34.r23NoB;
            var34 = var40.bind(var41)(var34);
            _fun0001_ip = 62; continue _fun0001;
case 60:
            var43 = _closure1_slot0;
            var44 = _closure1_slot3;
            var40 = 25;
            var41 = var44[var40];
            var41 = var43.bind(var6)(var41);
            var42 = var41.intl;
            var41 = var42.string;
            var40 = var44[var40];
            var40 = var43.bind(var6)(var40);
            var40 = var40.t;
            var40 = var40["6C6PJx"];
            var34 = var41.bind(var42)(var40);
case 62:
            var36['label'] = var34;
            var40 = _closure1_slot0;
            var41 = _closure1_slot3;
            var34 = 26;
            var34 = var41[var34];
            var34 = var40.bind(var6)(var34);
            var34 = var34.GroupArrowDownIcon;
            var36['icon'] = var34;
            var34 = function onPress() {
                var4 = _closure2_slot4;
                var2 = {};
                var1 = 'PRESS_REMOVE_FROM_STAGE';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var6 = _closure1_slot0;
                var4 = _closure1_slot3;
                var5 = 27;
                var5 = var4[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.moveUserToAudience;
                var5 = _closure2_slot0;
                var3 = _closure2_slot7;
                var3 = var6.bind(var7)(var5, var3);
                var3 = _closure1_slot1;
                var2 = 13;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var36['onPress'] = var34;
            var34 = 'remove-from-stage';
            var34 = var39.bind(var6)(var38, var36, var34);
            var34 = var35.bind(var9)(var34);
case 58:
            if(!var33) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            if(!var31) { _fun0001_ip = 63; continue _fun0001 }
case 65:
            if(var25) { _fun0001_ip = 63; continue _fun0001 }
case 66:
            var31 = _closure1_slot0;
            var25 = _closure1_slot3;
            var25 = var25[var32];
            var25 = var31.bind(var6)(var25);
            var25 = var25.RequestToSpeakStates;
            var25 = var25.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            var25 = var27 === var25;
            var33 = _closure1_slot0;
            var27 = _closure1_slot3;
            var40 = 25;
            var31 = var27[var40];
            var31 = var33.bind(var6)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var27 = var27[var40];
            var27 = var33.bind(var6)(var27);
            var27 = var27.t;
            if(var25) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var33 = var27.VUCWcO;
            var34 = var31.bind(var32)(var33);
            _fun0001_ip = 69; continue _fun0001;
case 67:
            var27 = var27.tHj7Tb;
            var34 = var31.bind(var32)(var27);
case 69:
            var27 = var9.push;
            var33 = _closure1_slot15;
            var36 = _closure1_slot0;
            var38 = _closure1_slot3;
            var31 = 24;
            var31 = var38[var31];
            var31 = var36.bind(var6)(var31);
            var32 = var31.UserProfileFormRow;
            var31 = {};
            var35 = 28;
            var35 = var38[var35];
            var35 = var36.bind(var6)(var35);
            var35 = var35.MicrophoneArrowRightIcon;
            var31['icon'] = var35;
            if(!var4) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var39 = _closure1_slot0;
            var35 = _closure1_slot3;
            var36 = var35[var40];
            var36 = var39.bind(var6)(var36);
            var38 = var36.intl;
            var36 = var38.string;
            var35 = var35[var40];
            var35 = var39.bind(var6)(var35);
            var35 = var35.t;
            var35 = var35["8Joh+p"];
            var34 = var36.bind(var38)(var35);
case 70:
            var31['label'] = var34;
            var31['disabled'] = var25;
            var25 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure2_slot4;
                    var2 = {};
                    var1 = 'PRESS_INVITE_TO_SPEAK';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var4 = _closure2_slot10;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 27;
                    var5 = var7[var5];
                    var6 = var6.bind(var1)(var5);
                    if(var4) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                    var7 = var6.inviteUserToStage;
                    var5 = _closure2_slot7;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var4 = var7.bind(var6)(var5, var4);
                    _fun0008_ip = 74; continue _fun0008;
case 72:
                    var5 = var6.audienceAckRequestToSpeak;
                    var4 = _closure2_slot7;
                    var3 = false;
                    var3 = var5.bind(var6)(var4, var3);
case 74:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 13;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var31['onPress'] = var25;
            var25 = 'invite-to-speak';
            var25 = var33.bind(var6)(var32, var31, var25);
            var25 = var27.bind(var9)(var25);
case 63:
            var25 = var17;
            if(!var17) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var25 = var18;
case 75:
            if(!var25) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            var27 = var9.push;
            var33 = _closure1_slot15;
            var34 = _closure1_slot0;
            var35 = _closure1_slot3;
            var25 = 24;
            var25 = var35[var25];
            var25 = var34.bind(var6)(var25);
            var32 = var25.UserProfileFormRow;
            var31 = {};
            var25 = 25;
            var36 = var35[var25];
            var36 = var34.bind(var6)(var36);
            var38 = var36.intl;
            var36 = var38.string;
            var25 = var35[var25];
            var25 = var34.bind(var6)(var25);
            var25 = var25.t;
            var25 = var25.FAplms;
            var25 = var36.bind(var38)(var25);
            var31['label'] = var25;
            var25 = 29;
            var25 = var35[var25];
            var25 = var34.bind(var6)(var25);
            var25 = var25.FormArrow;
            var31['hint'] = var25;
            var25 = 30;
            var25 = var35[var25];
            var25 = var34.bind(var6)(var25);
            var36 = var25.Text;
            var25 = {'variant': 'text-xs/normal', 'color': 'text-subtle'};
            var25['children'] = var37;
            var25 = var33.bind(var6)(var36, var25);
            var31['sublabel'] = var25;
            var25 = 31;
            var25 = var35[var25];
            var25 = var34.bind(var6)(var25);
            var25 = var25.VoiceNormalIcon;
            var31['icon'] = var25;
            var25 = function onPress() {
                var4 = _closure2_slot4;
                var3 = {};
                var1 = 'PRESS_MOVE_TO_CHANNEL';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = _closure1_slot1;
                var12 = _closure1_slot3;
                var4 = 13;
                var4 = var12[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.openLazy;
                var11 = _closure1_slot0;
                var3 = 33;
                var3 = var12[var3];
                var5 = var11.bind(var1)(var3);
                var3 = 32;
                var4 = var12[var3];
                var3 = var12.paths;
                var5 = var5.bind(var1)(var4, var3);
                var4 = {};
                var3 = _closure2_slot8;
                var4['guild'] = var3;
                var3 = {};
                var8 = 25;
                var9 = var12[var8];
                var9 = var11.bind(var1)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.r2ptsz;
                var8 = var9.bind(var10)(var8);
                var3['title'] = var8;
                var4['header'] = var3;
                var2 = _closure2_slot13;
                var4['channels'] = var2;
                var2 = function onSelect(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 34;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.setChannel;
                    var2 = _closure2_slot8;
                    var3 = var2.id;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var4['onSelect'] = var2;
                var2 = null;
                var4['selectedChannel'] = var2;
                var15 = 'ChannelPicker';
                var13 = 'stack';
                var17 = var7;
                var16 = var5;
                var14 = var4;
                var2 = var17[var6](var16, var15, var14, var13, var12);
                return var1;
            };
            var31['onPress'] = var25;
            var25 = 'move-to-channel';
            var25 = var33.bind(var6)(var32, var31, var25);
            var25 = var27.bind(var9)(var25);
case 77:
            var25 = var1 != var14;
            if(!var25) { _fun0001_ip = 79; continue _fun0001 }
case 80:
            var27 = var15;
            if(var15) { _fun0001_ip = 81; continue _fun0001 }
case 82:
            var27 = var12;
case 81:
            if(var27) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var27 = var30;
case 83:
            if(var27) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var27 = var28;
case 85:
            var25 = var27;
case 79:
            if(!var25) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var27 = var21.isNonUserBot;
            var27 = var27.bind(var21)();
            var25 = !var27;
case 87:
            if(!var25) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var27 = var9.push;
            var31 = _closure1_slot15;
            var32 = _closure1_slot0;
            var33 = _closure1_slot3;
            var25 = 24;
            var25 = var33[var25];
            var25 = var32.bind(var6)(var25);
            var30 = var25.UserProfileFormRow;
            var28 = {};
            var25 = 25;
            var34 = var33[var25];
            var34 = var32.bind(var6)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var25 = var33[var25];
            var25 = var32.bind(var6)(var25);
            var25 = var25.t;
            var25 = var25.HxrBOZ;
            var25 = var34.bind(var35)(var25);
            var28['label'] = var25;
            var25 = 35;
            var25 = var33[var25];
            var25 = var32.bind(var6)(var25);
            var25 = var25.SettingsIcon;
            var28['icon'] = var25;
            var25 = function onPress() {
                var3 = _closure2_slot4;
                var2 = {};
                var1 = 'PRESS_MANAGE_USER';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = _closure2_slot5;
                var2 = var2.bind(var1)();
                var5 = _closure1_slot1;
                var2 = _closure1_slot3;
                var4 = 36;
                var4 = var2[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.pushLazy;
                var8 = _closure1_slot0;
                var3 = 33;
                var3 = var2[var3];
                var8 = var8.bind(var1)(var3);
                var3 = 37;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var8.bind(var1)(var3, var2);
                var2 = {};
                var8 = _closure2_slot0;
                var8 = var8.id;
                var2['userId'] = var8;
                var7 = _closure2_slot8;
                var7 = var7.id;
                var2['guildId'] = var7;
                var7 = function onClose() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 36;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.pop;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['onClose'] = var7;
                var6 = function onRemove() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 36;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.pop;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var2['onRemove'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var28['onPress'] = var25;
            var25 = 'manage';
            var25 = var31.bind(var6)(var30, var28, var25);
            var25 = var27.bind(var9)(var25);
case 89:
            var30 = var26.features;
            var28 = var30.has;
            var25 = _closure1_slot12;
            var27 = var25.COMMUNITY;
            var28 = var28.bind(var30)(var27);
            var27 = var26.features;
            var26 = var27.has;
            var25 = var25.GUILD_ONBOARDING_EVER_ENABLED;
            var27 = var26.bind(var27)(var25);
            var26 = var1 != var14;
            if(!var26) { _fun0001_ip = 91; continue _fun0001 }
case 92:
            var30 = _closure1_slot0;
            var31 = _closure1_slot3;
            var25 = 38;
            var25 = var31[var25];
            var32 = var30.bind(var6)(var25);
            var31 = var32.hasFlag;
            var25 = var14.flags;
            var33 = var1 != var25;
            var30 = 0;
            if(!var33) { _fun0001_ip = 93; continue _fun0001 }
case 94:
            var30 = var25;
case 93:
            var25 = _closure1_slot14;
            var25 = var25.BYPASSES_VERIFICATION;
            var26 = var31.bind(var32)(var30, var25);
case 91:
            var25 = var1 != var14;
            if(!var25) { _fun0001_ip = 95; continue _fun0001 }
case 96:
            var25 = !var4;
case 95:
            if(!var25) { _fun0001_ip = 97; continue _fun0001 }
case 98:
            var25 = var29;
case 97:
            if(!var25) { _fun0001_ip = 99; continue _fun0001 }
case 100:
            var25 = var28;
case 99:
            if(!var25) { _fun0001_ip = 101; continue _fun0001 }
case 102:
            var25 = var27;
case 101:
            if(!var25) { _fun0001_ip = 103; continue _fun0001 }
case 104:
            var25 = var26;
case 103:
            if(!var25) { _fun0001_ip = 105; continue _fun0001 }
case 106:
            var30 = var9.push;
            var33 = _closure1_slot15;
            var34 = _closure1_slot0;
            var35 = _closure1_slot3;
            var25 = 24;
            var25 = var35[var25];
            var25 = var34.bind(var6)(var25);
            var32 = var25.UserProfileFormRow;
            var31 = {};
            var25 = 25;
            var36 = var35[var25];
            var36 = var34.bind(var6)(var36);
            var37 = var36.intl;
            var36 = var37.string;
            var25 = var35[var25];
            var25 = var34.bind(var6)(var25);
            var25 = var25.t;
            var25 = var25.NbhSI7;
            var25 = var36.bind(var37)(var25);
            var31['label'] = var25;
            var25 = 39;
            var25 = var35[var25];
            var25 = var34.bind(var6)(var25);
            var25 = var25.StampIcon;
            var31['icon'] = var25;
            var25 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = 'PRESS_UNVERIFY_USER';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var3 = 34;
                    var3 = var10[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.setMemberFlags;
                    var3 = _closure2_slot8;
                    var4 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var9 = _closure1_slot0;
                    var8 = 38;
                    var8 = var10[var8];
                    var10 = var9.bind(var1)(var8);
                    var9 = var10.setFlag;
                    var7 = _closure2_slot9;
                    var7 = var7.flags;
                    var8 = null;
                    var11 = var8 != var7;
                    var8 = 0;
                    if(!var11) { _fun0009_ip = 107; continue _fun0009 }
case 108:
                    var8 = var7;
case 107:
                    var2 = _closure1_slot14;
                    var7 = var2.BYPASSES_VERIFICATION;
                    var2 = false;
                    var2 = var9.bind(var10)(var8, var7, var2);
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var31['onPress'] = var25;
            var25 = 'unverify';
            var25 = var33.bind(var6)(var32, var31, var25);
            var25 = var30.bind(var9)(var25);
case 105:
            var25 = var1 != var14;
            if(!var25) { _fun0001_ip = 109; continue _fun0001 }
case 110:
            var25 = !var4;
case 109:
            if(!var25) { _fun0001_ip = 111; continue _fun0001 }
case 112:
            var25 = var29;
case 111:
            if(!var25) { _fun0001_ip = 113; continue _fun0001 }
case 114:
            var25 = var28;
case 113:
            if(!var25) { _fun0001_ip = 115; continue _fun0001 }
case 116:
            var25 = var27;
case 115:
            if(!var25) { _fun0001_ip = 117; continue _fun0001 }
case 118:
            var25 = !var26;
case 117:
            if(!var25) { _fun0001_ip = 119; continue _fun0001 }
case 120:
            var26 = var9.push;
            var29 = _closure1_slot15;
            var30 = _closure1_slot0;
            var31 = _closure1_slot3;
            var25 = 24;
            var25 = var31[var25];
            var25 = var30.bind(var6)(var25);
            var28 = var25.UserProfileFormRow;
            var27 = {};
            var25 = 25;
            var32 = var31[var25];
            var32 = var30.bind(var6)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var25 = var31[var25];
            var25 = var30.bind(var6)(var25);
            var25 = var25.t;
            var25 = var25["6QlTeK"];
            var25 = var32.bind(var33)(var25);
            var27['label'] = var25;
            var25 = 39;
            var25 = var31[var25];
            var25 = var30.bind(var6)(var25);
            var25 = var25.StampIcon;
            var27['icon'] = var25;
            var25 = function onPress() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = 'PRESS_VERIFY_USER';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var3 = 34;
                    var3 = var10[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.setMemberFlags;
                    var3 = _closure2_slot8;
                    var4 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var9 = _closure1_slot0;
                    var8 = 38;
                    var8 = var10[var8];
                    var10 = var9.bind(var1)(var8);
                    var9 = var10.setFlag;
                    var7 = _closure2_slot9;
                    var7 = var7.flags;
                    var8 = null;
                    var11 = var8 != var7;
                    var8 = 0;
                    if(!var11) { _fun0010_ip = 107; continue _fun0010 }
case 108:
                    var8 = var7;
case 107:
                    var2 = _closure1_slot14;
                    var7 = var2.BYPASSES_VERIFICATION;
                    var2 = true;
                    var2 = var9.bind(var10)(var8, var7, var2);
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var27['onPress'] = var25;
            var25 = 'verify';
            var25 = var29.bind(var6)(var28, var27, var25);
            var25 = var26.bind(var9)(var25);
case 119:
            if(!(var1 != var14)) { _fun0001_ip = 121; continue _fun0001 }
case 122:
            if(!var20) { _fun0001_ip = 121; continue _fun0001 }
case 123:
            var27 = _closure1_slot0;
            var29 = _closure1_slot3;
            var20 = 40;
            var20 = var29[var20];
            var25 = var27.bind(var6)(var20);
            var20 = var25.isMemberCommunicationDisabled;
            var20 = var20.bind(var25)(var14);
            _closure2_slot14 = var20;
            var25 = var9.push;
            var28 = _closure1_slot15;
            var26 = 24;
            var26 = var29[var26];
            var26 = var27.bind(var6)(var26);
            var27 = var26.UserProfileFormRow;
            var26 = {};
            var32 = _closure1_slot0;
            var33 = _closure1_slot3;
            var29 = 25;
            var30 = var33[var29];
            var30 = var32.bind(var6)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var33[var29];
            var29 = var32.bind(var6)(var29);
            var29 = var29.t;
            if(var20) { _fun0001_ip = 124; continue _fun0001 }
case 125:
            var20 = var29.xpsADY;
            var20 = var30.bind(var31)(var20);
            _fun0001_ip = 126; continue _fun0001;
case 124:
            var29 = var29.qXtNtS;
            var20 = var30.bind(var31)(var29);
case 126:
            var26['label'] = var20;
            var29 = _closure1_slot0;
            var30 = _closure1_slot3;
            var20 = 41;
            var20 = var30[var20];
            var20 = var29.bind(var6)(var20);
            var20 = var20.ClockWarningIcon;
            var26['icon'] = var20;
            var20 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var4 = _closure2_slot14;
                    var1 = 'PRESS_TIME_OUT_USER';
                    if(!var4) { _fun0011_ip = 40; continue _fun0011 }
case 38:
                    var1 = 'PRESS_REMOVE_TIME_OUT';
case 40:
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
                    var2 = _closure2_slot14;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 42;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    if(var2) { _fun0011_ip = 127; continue _fun0011 }
case 128:
                    var3 = var4.openDisableCommunication;
                    var2 = {};
                    var6 = _closure2_slot9;
                    var7 = var6.guildId;
                    var2['guildId'] = var7;
                    var6 = var6.userId;
                    var2['userId'] = var6;
                    var6 = _closure2_slot3;
                    var2['cancelButtonCallback'] = var6;
                    var2 = var3.bind(var4)(var2);
                    _fun0011_ip = 45; continue _fun0011;
case 127:
                    var3 = var4.openEnableCommunication;
                    var2 = {};
                    var6 = _closure2_slot9;
                    var7 = var6.guildId;
                    var2['guildId'] = var7;
                    var6 = var6.userId;
                    var2['userId'] = var6;
                    var5 = _closure2_slot3;
                    var2['cancelButtonCallback'] = var5;
                    var2 = var3.bind(var4)(var2);
case 45:
                    return var1;
                }
            };
            var26['onPress'] = var20;
            var20 = 'time-out';
            var20 = var28.bind(var6)(var27, var26, var20);
            var20 = var25.bind(var9)(var20);
case 121:
            var20 = var17;
            if(!var17) { _fun0001_ip = 129; continue _fun0001 }
case 130:
            var20 = var23;
case 129:
            if(!var20) { _fun0001_ip = 131; continue _fun0001 }
case 132:
            var20 = var24;
case 131:
            if(!var20) { _fun0001_ip = 133; continue _fun0001 }
case 134:
            var24 = var9.push;
            var27 = _closure1_slot15;
            var25 = _closure1_slot0;
            var26 = _closure1_slot3;
            var20 = 24;
            var20 = var26[var20];
            var20 = var25.bind(var6)(var20);
            var26 = var20.UserProfileFormRow;
            var25 = {};
            var20 = var19.mute;
            var31 = _closure1_slot0;
            var32 = _closure1_slot3;
            var28 = 25;
            var29 = var32[var28];
            var29 = var31.bind(var6)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var32[var28];
            var28 = var31.bind(var6)(var28);
            var28 = var28.t;
            if(var20) { _fun0001_ip = 135; continue _fun0001 }
case 136:
            var20 = var28.e9e9Ua;
            var20 = var29.bind(var30)(var20);
            _fun0001_ip = 137; continue _fun0001;
case 135:
            var28 = var28.wG9K2n;
            var20 = var29.bind(var30)(var28);
case 137:
            var25['label'] = var20;
            var20 = var19.mute;
            var29 = _closure1_slot0;
            var30 = _closure1_slot3;
            if(var20) { _fun0001_ip = 138; continue _fun0001 }
case 139:
            var20 = 44;
            var20 = var30[var20];
            var20 = var29.bind(var6)(var20);
            var20 = var20.MicrophoneIcon;
            _fun0001_ip = 140; continue _fun0001;
case 138:
            var28 = 43;
            var28 = var30[var28];
            var28 = var29.bind(var6)(var28);
            var20 = var28.MicrophoneSlashIcon;
case 140:
            var25['icon'] = var20;
            var20 = function onPress() {
                var4 = _closure2_slot4;
                var3 = {};
                var1 = 'SERVER_MUTE';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var3 = 34;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.setServerMute;
                var3 = _closure2_slot8;
                var4 = var3.id;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var2 = _closure2_slot6;
                var2 = var2.mute;
                var2 = !var2;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var25['onPress'] = var20;
            var20 = 'server-mute';
            var20 = var27.bind(var6)(var26, var25, var20);
            var20 = var24.bind(var9)(var20);
case 133:
            var20 = var17;
            if(!var17) { _fun0001_ip = 141; continue _fun0001 }
case 142:
            var20 = var23;
case 141:
            if(!var20) { _fun0001_ip = 143; continue _fun0001 }
case 144:
            var20 = var22;
case 143:
            if(!var20) { _fun0001_ip = 145; continue _fun0001 }
case 146:
            var20 = var9.push;
            var24 = _closure1_slot15;
            var23 = _closure1_slot0;
            var25 = _closure1_slot3;
            var22 = 24;
            var22 = var25[var22];
            var22 = var23.bind(var6)(var22);
            var23 = var22.UserProfileFormRow;
            var22 = {};
            var25 = var19.deaf;
            var29 = _closure1_slot0;
            var30 = _closure1_slot3;
            var26 = 25;
            var27 = var30[var26];
            var27 = var29.bind(var6)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var30[var26];
            var26 = var29.bind(var6)(var26);
            var26 = var26.t;
            if(var25) { _fun0001_ip = 147; continue _fun0001 }
case 148:
            var25 = var26.hMA2GE;
            var25 = var27.bind(var28)(var25);
            _fun0001_ip = 149; continue _fun0001;
case 147:
            var26 = var26.Gbw4Z9;
            var25 = var27.bind(var28)(var26);
case 149:
            var22['label'] = var25;
            var19 = var19.deaf;
            var26 = _closure1_slot0;
            var27 = _closure1_slot3;
            if(var19) { _fun0001_ip = 150; continue _fun0001 }
case 151:
            var19 = 46;
            var19 = var27[var19];
            var19 = var26.bind(var6)(var19);
            var19 = var19.HeadphonesIcon;
            _fun0001_ip = 152; continue _fun0001;
case 150:
            var25 = 45;
            var25 = var27[var25];
            var25 = var26.bind(var6)(var25);
            var19 = var25.HeadphonesSlashIcon;
case 152:
            var22['icon'] = var19;
            var19 = function onPress() {
                var4 = _closure2_slot4;
                var3 = {};
                var1 = 'DEAFEN';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var3 = 34;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.setServerDeaf;
                var3 = _closure2_slot8;
                var4 = var3.id;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var2 = _closure2_slot6;
                var2 = var2.deaf;
                var2 = !var2;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var22['onPress'] = var19;
            var19 = 'deafen';
            var19 = var24.bind(var6)(var23, var22, var19);
            var19 = var20.bind(var9)(var19);
case 145:
            if(!var17) { _fun0001_ip = 153; continue _fun0001 }
case 154:
            var17 = var18;
case 153:
            if(!var17) { _fun0001_ip = 155; continue _fun0001 }
case 156:
            var17 = var9.push;
            var20 = _closure1_slot15;
            var19 = _closure1_slot0;
            var22 = _closure1_slot3;
            var18 = 24;
            var18 = var22[var18];
            var18 = var19.bind(var6)(var18);
            var19 = var18.UserProfileFormRow;
            var18 = {};
            var21 = var21.id;
            var16 = var16.id;
            if(!(var21 !== var16)) { _fun0001_ip = 157; continue _fun0001 }
case 158:
            var23 = _closure1_slot0;
            var24 = _closure1_slot3;
            var16 = 25;
            var21 = var24[var16];
            var21 = var23.bind(var6)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var16 = var24[var16];
            var16 = var23.bind(var6)(var16);
            var16 = var16.t;
            var16 = var16["/jERiG"];
            var16 = var21.bind(var22)(var16);
            _fun0001_ip = 159; continue _fun0001;
case 157:
            var24 = _closure1_slot0;
            var25 = _closure1_slot3;
            var21 = 25;
            var22 = var25[var21];
            var22 = var24.bind(var6)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var25[var21];
            var21 = var24.bind(var6)(var21);
            var21 = var21.t;
            var21 = var21["6vrfgt"];
            var16 = var22.bind(var23)(var21);
case 159:
            var18['label'] = var16;
            var21 = _closure1_slot0;
            var22 = _closure1_slot3;
            var16 = 47;
            var16 = var22[var16];
            var16 = var21.bind(var6)(var16);
            var16 = var16.PhoneHangUpIcon;
            var18['icon'] = var16;
            var16 = true;
            var18['isDestructive'] = var16;
            var16 = function onPress() {
                var4 = _closure2_slot4;
                var3 = {};
                var1 = 'DISCONNECT';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var3 = 34;
                var3 = var5[var3];
                var6 = var4.bind(var1)(var3);
                var5 = var6.setChannel;
                var3 = _closure2_slot8;
                var4 = var3.id;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var2 = null;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var18['onPress'] = var16;
            var16 = 'disconnect';
            var16 = var20.bind(var6)(var19, var18, var16);
            var16 = var17.bind(var9)(var16);
case 155:
            var14 = var1 != var14;
            if(!var14) { _fun0001_ip = 160; continue _fun0001 }
case 161:
            var14 = var15;
case 160:
            if(!var14) { _fun0001_ip = 162; continue _fun0001 }
case 163:
            var15 = var9.push;
            var18 = _closure1_slot15;
            var19 = _closure1_slot0;
            var20 = _closure1_slot3;
            var14 = 24;
            var14 = var20[var14];
            var14 = var19.bind(var6)(var14);
            var17 = var14.UserProfileFormRow;
            var16 = {};
            var14 = 25;
            var21 = var20[var14];
            var21 = var19.bind(var6)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var14 = var20[var14];
            var14 = var19.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14["3glT6Z"];
            var14 = var21.bind(var22)(var14);
            var16['label'] = var14;
            var14 = 48;
            var14 = var20[var14];
            var14 = var19.bind(var6)(var14);
            var14 = var14.UserMinusIcon;
            var16['icon'] = var14;
            var14 = true;
            var16['isDestructive'] = var14;
            var14 = function onPress() {
                var3 = _closure2_slot4;
                var2 = {};
                var1 = 'PRESS_KICK_USER';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = _closure2_slot5;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 49;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot8;
                var5 = var5.id;
                var2['guildId'] = var5;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['userId'] = var5;
                var4 = _closure2_slot3;
                var2['cancelButtonCallback'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var16['onPress'] = var14;
            var14 = 'kick';
            var14 = var18.bind(var6)(var17, var16, var14);
            var14 = var15.bind(var9)(var14);
case 162:
            if(!var12) { _fun0001_ip = 164; continue _fun0001 }
case 165:
            var14 = var9.push;
            var17 = _closure1_slot15;
            var18 = _closure1_slot0;
            var19 = _closure1_slot3;
            var12 = 24;
            var12 = var19[var12];
            var12 = var18.bind(var6)(var12);
            var16 = var12.UserProfileFormRow;
            var15 = {};
            var12 = 25;
            var20 = var19[var12];
            var20 = var18.bind(var6)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var12 = var19[var12];
            var12 = var18.bind(var6)(var12);
            var12 = var12.t;
            var12 = var12["5MBJ5M"];
            var12 = var20.bind(var21)(var12);
            var15['label'] = var12;
            var12 = 50;
            var12 = var19[var12];
            var12 = var18.bind(var6)(var12);
            var12 = var12.HammerIcon;
            var15['icon'] = var12;
            var12 = true;
            var15['isDestructive'] = var12;
            var12 = function onPress() {
                var3 = _closure2_slot4;
                var2 = {};
                var1 = 'PRESS_BAN_USER';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 51;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot8;
                var5 = var5.id;
                var2['guildId'] = var5;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['userId'] = var5;
                var4 = _closure2_slot3;
                var2['cancelButtonCallback'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15['onPress'] = var12;
            var12 = 'ban';
            var12 = var17.bind(var6)(var16, var15, var12);
            var12 = var14.bind(var9)(var12);
case 164:
            if(var10) { _fun0001_ip = 166; continue _fun0001 }
case 167:
            if(!var7) { _fun0001_ip = 168; continue _fun0001 }
case 166:
            if(!var5) { _fun0001_ip = 168; continue _fun0001 }
case 169:
            if(var4) { _fun0001_ip = 168; continue _fun0001 }
case 170:
            if(!(var1 != var3)) { _fun0001_ip = 168; continue _fun0001 }
case 171:
            var10 = _closure1_slot0;
            var12 = _closure1_slot3;
            var3 = 25;
            var4 = var12[var3];
            var4 = var10.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var12[var3];
            var3 = var10.bind(var6)(var3);
            var3 = var3.t;
            if(var7) { _fun0001_ip = 172; continue _fun0001 }
case 173:
            var7 = var3.at1yY3;
            var10 = var4.bind(var5)(var7);
            _fun0001_ip = 174; continue _fun0001;
case 172:
            var3 = var3["6+b8ae"];
            var10 = var4.bind(var5)(var3);
case 174:
            var3 = var9.push;
            var7 = _closure1_slot15;
            var12 = _closure1_slot0;
            var14 = _closure1_slot3;
            var4 = 24;
            var4 = var14[var4];
            var4 = var12.bind(var6)(var4);
            var5 = var4.UserProfileFormRow;
            var4 = {};
            var15 = true;
            var4['isDestructive'] = var15;
            var4['label'] = var10;
            var10 = 52;
            var10 = var14[var10];
            var10 = var12.bind(var6)(var10);
            var10 = var10.ThreadMinusIcon;
            var4['icon'] = var10;
            var2 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 53;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.confirmThreadRemove;
                var2 = {};
                var6 = _closure2_slot11;
                var2['isForumPost'] = var6;
                var5 = _closure2_slot0;
                var2['user'] = var5;
                var5 = function onConfirm() {
                    var4 = _closure2_slot4;
                    var3 = {};
                    var1 = 'PRESS_REMOVE_FROM_THREAD';
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 54;
                    var3 = var5[var3];
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.removeMember;
                    var5 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var4 = var3.id;
                    var3 = 'Context Menu';
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2['onConfirm'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var4['onPress'] = var2;
            var2 = 'remove-from-thread';
            var2 = var7.bind(var6)(var5, var4, var2);
            var2 = var3.bind(var9)(var2);
case 168:
            var4 = var9.length;
            var3 = 0;
            var2 = null;
            if(!(var3 !== var4)) { _fun0001_ip = 175; continue _fun0001 }
case 176:
            var5 = _closure1_slot15;
            var4 = _closure1_slot1;
            var10 = _closure1_slot3;
            var7 = 24;
            var3 = var10[var7];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var8 = _closure1_slot0;
            var12 = 25;
            var14 = var10[var12];
            var14 = var8.bind(var6)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var12 = var10[var12];
            var12 = var8.bind(var6)(var12);
            var12 = var12.t;
            var12 = var12.EApw/R;
            var12 = var14.bind(var15)(var12);
            var3['title'] = var12;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var11.cardContainer;
            var12[1] = var13;
            var3['style'] = var12;
            var11 = var11.cardTitle;
            var3['titleStyle'] = var11;
            var7 = var10[var7];
            var7 = var8.bind(var6)(var7);
            var8 = var7.UserProfileCardRows;
            var7 = {};
            var7['children'] = var9;
            var7 = var5.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 175:
            return var2;
case 52:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();