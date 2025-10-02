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
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot11 = var7;
    var4 = var4.Permissions;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot14 = var4;
    var4 = 10;
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
    var _closure1_slot15 = var4;
    var4 = 52;
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
            var20 = var1.guildId;
            var _closure2_slot1 = var20;
            var3 = var1.channelId;
            var _closure2_slot2 = var3;
            var4 = var1.showUserProfile;
            var _closure2_slot3 = var4;
            var13 = var1.style;
            var6 = undefined;
            var _closure2_slot13 = var6;
            var _closure2_slot14 = var6;
            var1 = _closure1_slot15;
            var11 = var1.bind(var6)();
            var4 = _closure1_slot0;
            var23 = _closure1_slot3;
            var1 = 11;
            var1 = var23[var1];
            var5 = var4.bind(var6)(var1);
            var1 = var5.useUserProfileAnalyticsContext;
            var1 = var1.bind(var5)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot4 = var1;
            var17 = _closure1_slot1;
            var1 = 12;
            var1 = var23[var1];
            var1 = var17.bind(var6)(var1);
            var1 = var1.hideActionSheet;
            var _closure2_slot5 = var1;
            var1 = 13;
            var1 = var23[var1];
            var5 = var17.bind(var6)(var1);
            var1 = {};
            var7 = var21.id;
            var1['userId'] = var7;
            var1['guildId'] = var20;
            var1 = var5.bind(var6)(var1);
            var19 = var1.voiceState;
            var _closure2_slot6 = var19;
            var37 = var1.voiceChannel;
            var _closure2_slot7 = var37;
            var35 = 14;
            var1 = var23[var35];
            var9 = var4.bind(var6)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var25 = var7.bind(var9)(var5, var1);
            var _closure2_slot8 = var25;
            var1 = var23[var35];
            var9 = var4.bind(var6)(var1);
            var7 = var9.useStateFromStores;
            var1 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var4 = _closure1_slot8;
                var3 = var4.getMember;
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var26 = var7.bind(var9)(var5, var1);
            var _closure2_slot9 = var26;
            var5 = var21.id;
            var1 = var16.id;
            var5 = var5 === var1;
            var _closure2_slot10 = var5;
            var1 = var23[var35];
            var12 = var4.bind(var6)(var1);
            var10 = var12.useStateFromStores;
            var1 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var1;
            var7 = function() {
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
            var12 = var10.bind(var12)(var9, var7);
            var7 = var23[var35];
            var10 = var4.bind(var6)(var7);
            var9 = var10.useStateFromStores;
            var7 = new Array(1);
            var7[0] = var1;
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
            var10 = var9.bind(var10)(var7, var1);
            var _closure2_slot11 = var10;
            var1 = 15;
            var1 = var23[var1];
            var7 = var4.bind(var6)(var1);
            var1 = var7.useCanRemoveThreadMember;
            var7 = var1.bind(var7)(var3);
            var1 = var23[var35];
            var14 = var4.bind(var6)(var1);
            var9 = var14.useStateFromStoresObject;
            var1 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 16;
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
                    var6 = _closure1_slot12;
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
                    var6 = _closure1_slot12;
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
                    var6 = _closure1_slot12;
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
                    var6 = _closure1_slot12;
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
                    var5 = _closure1_slot12;
                    var8 = var5.MODERATE_MEMBERS;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot8;
                    var3 = var9.bind(var10)(var8, var6, var5);
case 14:
                    var1['canModerateMembers'] = var3;
                    var5 = _closure1_slot10;
                    var8 = var5.can;
                    var3 = _closure1_slot12;
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
                    var2 = 17;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                    var2 = var3.bind(var5)(var2, var4);
                    var1['canModerateStage'] = var2;
                    return var1;
                }
            };
            var9 = var9.bind(var14)(var4, var1);
            var15 = var9.canKickUser;
            var14 = var9.canBanUser;
            var28 = var9.canChangeNick;
            var1 = var9.canManageUserRoles;
            var27 = var9.canManageGuildRoles;
            var4 = var9.canManageGuild;
            var30 = var9.canModerateMembers;
            var18 = var9.canMoveMembers;
            var _closure2_slot12 = var18;
            var24 = var9.canMuteMembers;
            var22 = var9.canDeafenMembers;
            var31 = var9.canModerateStage;
            var9 = 18;
            var9 = var23[var9];
            var17 = var17.bind(var6)(var9);
            var9 = var21.id;
            var20 = var17.bind(var6)(var20, var9);
            if(!var30) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var30 = var15;
case 16:
            if(!var30) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var30 = var14;
case 18:
            if(var30) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var30 = var4;
case 20:
            if(var30) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var30 = var1;
case 22:
            var4 = _closure1_slot1;
            var1 = _closure1_slot3;
            var32 = 19;
            var1 = var1[var32];
            var17 = var4.bind(var6)(var1);
            var9 = var21.id;
            var1 = null;
            var23 = var1 == var37;
            var4 = undefined;
            if(var23) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var4 = var37.id;
case 24:
            var29 = var17.bind(var6)(var9, var4);
            var17 = var1 != var37;
            if(!var17) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var9 = var1 == var19;
            var4 = undefined;
            if(var9) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var4 = var19.channelId;
case 28:
            var17 = var1 != var4;
case 26:
            var33 = var1 != var37;
            if(!var33) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var4 = var37.isGuildStageVoice;
            var33 = var4.bind(var37)();
case 30:
            var23 = var1 != var37;
            if(!var23) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var4 = !var33;
            if(var4) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var34 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var32];
            var9 = var34.bind(var6)(var9);
            var9 = var9.RequestToSpeakStates;
            var9 = var9.ON_STAGE;
            var4 = var29 === var9;
case 34:
            var23 = var4;
case 32:
            var34 = _closure1_slot0;
            var9 = _closure1_slot3;
            var4 = var9[var35];
            var39 = var34.bind(var6)(var4);
            var38 = var39.useStateFromStores;
            var4 = _closure1_slot4;
            var36 = new Array(1);
            var36[0] = var4;
            var4 = function() {
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
            var4 = var38.bind(var39)(var36, var4);
            var9 = var9[var35];
            var36 = var34.bind(var6)(var9);
            var35 = var36.useStateFromStoresArray;
            var9 = _closure1_slot6;
            var34 = new Array(1);
            var34[0] = var9;
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
                            var7 = var1.channel;
                            var2 = var7.id;
                            var1 = _closure2_slot7;
                            var1 = var1.id;
                            var1 = var2 !== var1;
                            if(!var1) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                            var4 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var2 = 20;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.can;
                            var2 = {};
                            var2['context'] = var7;
                            var6 = _closure1_slot12;
                            var6 = var6.CONNECT;
                            var2['permission'] = var6;
                            var5 = _closure2_slot0;
                            var2['user'] = var5;
                            var1 = var3.bind(var4)(var2);
case 42:
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
            if(!(var1 != var25)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            if(!(var1 != var26)) { _fun0001_ip = 44; continue _fun0001 }
case 46:
            var9 = new Array(0);
            var34 = var33;
            if(!var34) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var34 = var31;
case 47:
            if(!var34) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var34 = var4;
case 49:
            if(!var34) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var35 = var9.push;
            var39 = _closure1_slot14;
            var36 = _closure1_slot0;
            var38 = _closure1_slot3;
            var34 = 21;
            var34 = var38[var34];
            var34 = var36.bind(var6)(var34);
            var38 = var34.UserProfileFormRow;
            var36 = {};
            var40 = var21.id;
            var34 = var16.id;
            if(!(var40 !== var34)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var42 = _closure1_slot0;
            var43 = _closure1_slot3;
            var34 = 22;
            var40 = var43[var34];
            var40 = var42.bind(var6)(var40);
            var41 = var40.intl;
            var40 = var41.string;
            var34 = var43[var34];
            var34 = var42.bind(var6)(var34);
            var34 = var34.t;
            var34 = var34.r23NoK;
            var34 = var40.bind(var41)(var34);
            _fun0001_ip = 55; continue _fun0001;
case 53:
            var43 = _closure1_slot0;
            var44 = _closure1_slot3;
            var40 = 22;
            var41 = var44[var40];
            var41 = var43.bind(var6)(var41);
            var42 = var41.intl;
            var41 = var42.string;
            var40 = var44[var40];
            var40 = var43.bind(var6)(var40);
            var40 = var40.t;
            var40 = var40.6C6PJy;
            var34 = var41.bind(var42)(var40);
case 55:
            var36['label'] = var34;
            var40 = _closure1_slot0;
            var41 = _closure1_slot3;
            var34 = 23;
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
                var5 = 24;
                var5 = var4[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.moveUserToAudience;
                var5 = _closure2_slot0;
                var3 = _closure2_slot7;
                var3 = var6.bind(var7)(var5, var3);
                var3 = _closure1_slot1;
                var2 = 12;
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
case 51:
            if(!var33) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            if(!var31) { _fun0001_ip = 56; continue _fun0001 }
case 58:
            if(var4) { _fun0001_ip = 56; continue _fun0001 }
case 59:
            var31 = _closure1_slot0;
            var4 = _closure1_slot3;
            var4 = var4[var32];
            var4 = var31.bind(var6)(var4);
            var4 = var4.RequestToSpeakStates;
            var4 = var4.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            var4 = var29 === var4;
            var33 = _closure1_slot0;
            var29 = _closure1_slot3;
            var40 = 22;
            var31 = var29[var40];
            var31 = var33.bind(var6)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var29 = var29[var40];
            var29 = var33.bind(var6)(var29);
            var29 = var29.t;
            if(var4) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var33 = var29.VUCWcH;
            var34 = var31.bind(var32)(var33);
            _fun0001_ip = 62; continue _fun0001;
case 60:
            var29 = var29.tHj7TU;
            var34 = var31.bind(var32)(var29);
case 62:
            var29 = var9.push;
            var33 = _closure1_slot14;
            var36 = _closure1_slot0;
            var38 = _closure1_slot3;
            var31 = 21;
            var31 = var38[var31];
            var31 = var36.bind(var6)(var31);
            var32 = var31.UserProfileFormRow;
            var31 = {};
            var35 = 25;
            var35 = var38[var35];
            var35 = var36.bind(var6)(var35);
            var35 = var35.MicrophoneArrowRightIcon;
            var31['icon'] = var35;
            if(!var5) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var39 = _closure1_slot0;
            var35 = _closure1_slot3;
            var36 = var35[var40];
            var36 = var39.bind(var6)(var36);
            var38 = var36.intl;
            var36 = var38.string;
            var35 = var35[var40];
            var35 = var39.bind(var6)(var35);
            var35 = var35.t;
            var35 = var35.8Joh+v;
            var34 = var36.bind(var38)(var35);
case 63:
            var31['label'] = var34;
            var31['disabled'] = var4;
            var4 = function onPress() {
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
                    var5 = 24;
                    var5 = var7[var5];
                    var6 = var6.bind(var1)(var5);
                    if(var4) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                    var7 = var6.inviteUserToStage;
                    var5 = _closure2_slot7;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var4 = var7.bind(var6)(var5, var4);
                    _fun0008_ip = 67; continue _fun0008;
case 65:
                    var5 = var6.audienceAckRequestToSpeak;
                    var4 = _closure2_slot7;
                    var3 = false;
                    var3 = var5.bind(var6)(var4, var3);
case 67:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 12;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var31['onPress'] = var4;
            var4 = 'invite-to-speak';
            var4 = var33.bind(var6)(var32, var31, var4);
            var4 = var29.bind(var9)(var4);
case 56:
            var4 = var17;
            if(!var17) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var4 = var18;
case 68:
            if(!var4) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var29 = var9.push;
            var33 = _closure1_slot14;
            var34 = _closure1_slot0;
            var35 = _closure1_slot3;
            var4 = 21;
            var4 = var35[var4];
            var4 = var34.bind(var6)(var4);
            var32 = var4.UserProfileFormRow;
            var31 = {};
            var4 = 22;
            var36 = var35[var4];
            var36 = var34.bind(var6)(var36);
            var38 = var36.intl;
            var36 = var38.string;
            var4 = var35[var4];
            var4 = var34.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.FAplmp;
            var4 = var36.bind(var38)(var4);
            var31['label'] = var4;
            var4 = 26;
            var4 = var35[var4];
            var4 = var34.bind(var6)(var4);
            var4 = var4.FormArrow;
            var31['hint'] = var4;
            var4 = 27;
            var4 = var35[var4];
            var4 = var34.bind(var6)(var4);
            var36 = var4.Text;
            var4 = {'variant': 'text-xs/normal', 'color': 'text-secondary'};
            var37 = var37.name;
            var4['children'] = var37;
            var4 = var33.bind(var6)(var36, var4);
            var31['sublabel'] = var4;
            var4 = 28;
            var4 = var35[var4];
            var4 = var34.bind(var6)(var4);
            var4 = var4.VoiceNormalIcon;
            var31['icon'] = var4;
            var4 = function onPress() {
                var4 = _closure2_slot4;
                var3 = {};
                var1 = 'PRESS_MOVE_TO_CHANNEL';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = _closure1_slot1;
                var12 = _closure1_slot3;
                var4 = 12;
                var4 = var12[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.openLazy;
                var11 = _closure1_slot0;
                var3 = 30;
                var3 = var12[var3];
                var5 = var11.bind(var1)(var3);
                var3 = 29;
                var4 = var12[var3];
                var3 = var12.paths;
                var5 = var5.bind(var1)(var4, var3);
                var4 = {};
                var3 = _closure2_slot8;
                var4['guild'] = var3;
                var3 = {};
                var8 = 22;
                var9 = var12[var8];
                var9 = var11.bind(var1)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.r2pts7;
                var8 = var9.bind(var10)(var8);
                var3['title'] = var8;
                var4['header'] = var3;
                var2 = _closure2_slot13;
                var4['channels'] = var2;
                var2 = function onSelect(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 31;
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
            var31['onPress'] = var4;
            var4 = 'move-to-channel';
            var4 = var33.bind(var6)(var32, var31, var4);
            var4 = var29.bind(var9)(var4);
case 70:
            var4 = var15;
            if(var4) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var4 = var14;
case 72:
            if(var4) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var4 = var28;
case 74:
            if(var4) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            var4 = var27;
case 76:
            if(!var4) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var27 = var21.isNonUserBot;
            var27 = var27.bind(var21)();
            var4 = !var27;
case 78:
            if(!var4) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var27 = var9.push;
            var31 = _closure1_slot14;
            var32 = _closure1_slot0;
            var33 = _closure1_slot3;
            var4 = 21;
            var4 = var33[var4];
            var4 = var32.bind(var6)(var4);
            var29 = var4.UserProfileFormRow;
            var28 = {};
            var4 = 22;
            var34 = var33[var4];
            var34 = var32.bind(var6)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var4 = var33[var4];
            var4 = var32.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.HxrBOT;
            var4 = var34.bind(var35)(var4);
            var28['label'] = var4;
            var4 = 32;
            var4 = var33[var4];
            var4 = var32.bind(var6)(var4);
            var4 = var4.SettingsIcon;
            var28['icon'] = var4;
            var4 = function onPress() {
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
                var4 = 33;
                var4 = var2[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.pushLazy;
                var8 = _closure1_slot0;
                var3 = 30;
                var3 = var2[var3];
                var8 = var8.bind(var1)(var3);
                var3 = 34;
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
                    var1 = 33;
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
                    var1 = 33;
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
            var28['onPress'] = var4;
            var4 = 'manage';
            var4 = var31.bind(var6)(var29, var28, var4);
            var4 = var27.bind(var9)(var4);
case 80:
            var29 = var25.features;
            var28 = var29.has;
            var4 = _closure1_slot11;
            var27 = var4.COMMUNITY;
            var29 = var28.bind(var29)(var27);
            var27 = var25.features;
            var25 = var27.has;
            var4 = var4.GUILD_ONBOARDING_EVER_ENABLED;
            var28 = var25.bind(var27)(var4);
            var25 = _closure1_slot0;
            var27 = _closure1_slot3;
            var4 = 35;
            var4 = var27[var4];
            var32 = var25.bind(var6)(var4);
            var31 = var32.hasFlag;
            var25 = var26.flags;
            var33 = var1 != var25;
            var4 = 0;
            var27 = 0;
            if(!var33) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var27 = var25;
case 82:
            var25 = _closure1_slot13;
            var25 = var25.BYPASSES_VERIFICATION;
            var27 = var31.bind(var32)(var27, var25);
            var25 = !var5;
            var31 = var25;
            if(var5) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var31 = var30;
case 84:
            if(!var31) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var31 = var29;
case 86:
            if(!var31) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var31 = var28;
case 88:
            if(!var31) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var31 = var27;
case 90:
            if(!var31) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var32 = var9.push;
            var35 = _closure1_slot14;
            var36 = _closure1_slot0;
            var37 = _closure1_slot3;
            var31 = 21;
            var31 = var37[var31];
            var31 = var36.bind(var6)(var31);
            var34 = var31.UserProfileFormRow;
            var33 = {};
            var31 = 22;
            var38 = var37[var31];
            var38 = var36.bind(var6)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var31 = var37[var31];
            var31 = var36.bind(var6)(var31);
            var31 = var31.t;
            var31 = var31.NbhSIy;
            var31 = var38.bind(var39)(var31);
            var33['label'] = var31;
            var31 = 36;
            var31 = var37[var31];
            var31 = var36.bind(var6)(var31);
            var31 = var31.StampIcon;
            var33['icon'] = var31;
            var31 = function onPress() {
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
                    var3 = 31;
                    var3 = var10[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.setMemberFlags;
                    var3 = _closure2_slot8;
                    var4 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var9 = _closure1_slot0;
                    var8 = 35;
                    var8 = var10[var8];
                    var10 = var9.bind(var1)(var8);
                    var9 = var10.setFlag;
                    var7 = _closure2_slot9;
                    var7 = var7.flags;
                    var8 = null;
                    var11 = var8 != var7;
                    var8 = 0;
                    if(!var11) { _fun0009_ip = 94; continue _fun0009 }
case 95:
                    var8 = var7;
case 94:
                    var2 = _closure1_slot13;
                    var7 = var2.BYPASSES_VERIFICATION;
                    var2 = false;
                    var2 = var9.bind(var10)(var8, var7, var2);
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var33['onPress'] = var31;
            var31 = 'unverify';
            var31 = var35.bind(var6)(var34, var33, var31);
            var31 = var32.bind(var9)(var31);
case 92:
            if(var5) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var25 = var30;
case 96:
            if(!var25) { _fun0001_ip = 98; continue _fun0001 }
case 99:
            var25 = var29;
case 98:
            if(!var25) { _fun0001_ip = 100; continue _fun0001 }
case 101:
            var25 = var28;
case 100:
            if(!var25) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var25 = !var27;
case 102:
            if(!var25) { _fun0001_ip = 104; continue _fun0001 }
case 105:
            var27 = var9.push;
            var30 = _closure1_slot14;
            var31 = _closure1_slot0;
            var32 = _closure1_slot3;
            var25 = 21;
            var25 = var32[var25];
            var25 = var31.bind(var6)(var25);
            var29 = var25.UserProfileFormRow;
            var28 = {};
            var25 = 22;
            var33 = var32[var25];
            var33 = var31.bind(var6)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var25 = var32[var25];
            var25 = var31.bind(var6)(var25);
            var25 = var25.t;
            var25 = var25.6QlTeH;
            var25 = var33.bind(var34)(var25);
            var28['label'] = var25;
            var25 = 36;
            var25 = var32[var25];
            var25 = var31.bind(var6)(var25);
            var25 = var25.StampIcon;
            var28['icon'] = var25;
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
                    var3 = 31;
                    var3 = var10[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.setMemberFlags;
                    var3 = _closure2_slot8;
                    var4 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var9 = _closure1_slot0;
                    var8 = 35;
                    var8 = var10[var8];
                    var10 = var9.bind(var1)(var8);
                    var9 = var10.setFlag;
                    var7 = _closure2_slot9;
                    var7 = var7.flags;
                    var8 = null;
                    var11 = var8 != var7;
                    var8 = 0;
                    if(!var11) { _fun0010_ip = 94; continue _fun0010 }
case 95:
                    var8 = var7;
case 94:
                    var2 = _closure1_slot13;
                    var7 = var2.BYPASSES_VERIFICATION;
                    var2 = true;
                    var2 = var9.bind(var10)(var8, var7, var2);
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var28['onPress'] = var25;
            var25 = 'verify';
            var25 = var30.bind(var6)(var29, var28, var25);
            var25 = var27.bind(var9)(var25);
case 104:
            if(!var20) { _fun0001_ip = 106; continue _fun0001 }
case 107:
            var27 = _closure1_slot0;
            var29 = _closure1_slot3;
            var20 = 37;
            var20 = var29[var20];
            var25 = var27.bind(var6)(var20);
            var20 = var25.isMemberCommunicationDisabled;
            var20 = var20.bind(var25)(var26);
            _closure2_slot14 = var20;
            var25 = var9.push;
            var28 = _closure1_slot14;
            var26 = 21;
            var26 = var29[var26];
            var26 = var27.bind(var6)(var26);
            var27 = var26.UserProfileFormRow;
            var26 = {};
            var32 = _closure1_slot0;
            var33 = _closure1_slot3;
            var29 = 22;
            var30 = var33[var29];
            var30 = var32.bind(var6)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var33[var29];
            var29 = var32.bind(var6)(var29);
            var29 = var29.t;
            if(var20) { _fun0001_ip = 108; continue _fun0001 }
case 109:
            var20 = var29.xpsADQ;
            var20 = var30.bind(var31)(var20);
            _fun0001_ip = 110; continue _fun0001;
case 108:
            var29 = var29.qXtNtb;
            var20 = var30.bind(var31)(var29);
case 110:
            var26['label'] = var20;
            var29 = _closure1_slot0;
            var30 = _closure1_slot3;
            var20 = 38;
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
                    var3 = 39;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    if(var2) { _fun0011_ip = 111; continue _fun0011 }
case 112:
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
                    _fun0011_ip = 113; continue _fun0011;
case 111:
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
case 113:
                    return var1;
                }
            };
            var26['onPress'] = var20;
            var20 = 'time-out';
            var20 = var28.bind(var6)(var27, var26, var20);
            var20 = var25.bind(var9)(var20);
case 106:
            var20 = var17;
            if(!var17) { _fun0001_ip = 114; continue _fun0001 }
case 115:
            var20 = var23;
case 114:
            if(!var20) { _fun0001_ip = 116; continue _fun0001 }
case 117:
            var20 = var24;
case 116:
            if(!var20) { _fun0001_ip = 118; continue _fun0001 }
case 119:
            var24 = var9.push;
            var27 = _closure1_slot14;
            var25 = _closure1_slot0;
            var26 = _closure1_slot3;
            var20 = 21;
            var20 = var26[var20];
            var20 = var25.bind(var6)(var20);
            var26 = var20.UserProfileFormRow;
            var25 = {};
            var20 = var19.mute;
            var31 = _closure1_slot0;
            var32 = _closure1_slot3;
            var28 = 22;
            var29 = var32[var28];
            var29 = var31.bind(var6)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var32[var28];
            var28 = var31.bind(var6)(var28);
            var28 = var28.t;
            if(var20) { _fun0001_ip = 120; continue _fun0001 }
case 121:
            var20 = var28.e9e9UV;
            var20 = var29.bind(var30)(var20);
            _fun0001_ip = 122; continue _fun0001;
case 120:
            var28 = var28.wG9K2t;
            var20 = var29.bind(var30)(var28);
case 122:
            var25['label'] = var20;
            var20 = var19.mute;
            var29 = _closure1_slot0;
            var30 = _closure1_slot3;
            if(var20) { _fun0001_ip = 123; continue _fun0001 }
case 124:
            var20 = 41;
            var20 = var30[var20];
            var20 = var29.bind(var6)(var20);
            var20 = var20.MicrophoneIcon;
            _fun0001_ip = 125; continue _fun0001;
case 123:
            var28 = 40;
            var28 = var30[var28];
            var28 = var29.bind(var6)(var28);
            var20 = var28.MicrophoneSlashIcon;
case 125:
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
                var3 = 31;
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
case 118:
            var20 = var17;
            if(!var17) { _fun0001_ip = 126; continue _fun0001 }
case 127:
            var20 = var23;
case 126:
            if(!var20) { _fun0001_ip = 128; continue _fun0001 }
case 129:
            var20 = var22;
case 128:
            if(!var20) { _fun0001_ip = 130; continue _fun0001 }
case 131:
            var20 = var9.push;
            var24 = _closure1_slot14;
            var23 = _closure1_slot0;
            var25 = _closure1_slot3;
            var22 = 21;
            var22 = var25[var22];
            var22 = var23.bind(var6)(var22);
            var23 = var22.UserProfileFormRow;
            var22 = {};
            var25 = var19.deaf;
            var29 = _closure1_slot0;
            var30 = _closure1_slot3;
            var26 = 22;
            var27 = var30[var26];
            var27 = var29.bind(var6)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var30[var26];
            var26 = var29.bind(var6)(var26);
            var26 = var26.t;
            if(var25) { _fun0001_ip = 132; continue _fun0001 }
case 133:
            var25 = var26.hMA2GB;
            var25 = var27.bind(var28)(var25);
            _fun0001_ip = 134; continue _fun0001;
case 132:
            var26 = var26.Gbw4Z2;
            var25 = var27.bind(var28)(var26);
case 134:
            var22['label'] = var25;
            var19 = var19.deaf;
            var26 = _closure1_slot0;
            var27 = _closure1_slot3;
            if(var19) { _fun0001_ip = 135; continue _fun0001 }
case 136:
            var19 = 43;
            var19 = var27[var19];
            var19 = var26.bind(var6)(var19);
            var19 = var19.HeadphonesIcon;
            _fun0001_ip = 137; continue _fun0001;
case 135:
            var25 = 42;
            var25 = var27[var25];
            var25 = var26.bind(var6)(var25);
            var19 = var25.HeadphonesSlashIcon;
case 137:
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
                var3 = 31;
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
case 130:
            if(!var17) { _fun0001_ip = 138; continue _fun0001 }
case 139:
            var17 = var18;
case 138:
            if(!var17) { _fun0001_ip = 140; continue _fun0001 }
case 141:
            var17 = var9.push;
            var20 = _closure1_slot14;
            var19 = _closure1_slot0;
            var22 = _closure1_slot3;
            var18 = 21;
            var18 = var22[var18];
            var18 = var19.bind(var6)(var18);
            var19 = var18.UserProfileFormRow;
            var18 = {};
            var21 = var21.id;
            var16 = var16.id;
            if(!(var21 !== var16)) { _fun0001_ip = 142; continue _fun0001 }
case 143:
            var23 = _closure1_slot0;
            var24 = _closure1_slot3;
            var16 = 22;
            var21 = var24[var16];
            var21 = var23.bind(var6)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var16 = var24[var16];
            var16 = var23.bind(var6)(var16);
            var16 = var16.t;
            var16 = var16./jERiI;
            var16 = var21.bind(var22)(var16);
            _fun0001_ip = 144; continue _fun0001;
case 142:
            var24 = _closure1_slot0;
            var25 = _closure1_slot3;
            var21 = 22;
            var22 = var25[var21];
            var22 = var24.bind(var6)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var25[var21];
            var21 = var24.bind(var6)(var21);
            var21 = var21.t;
            var21 = var21.6vrfgo;
            var16 = var22.bind(var23)(var21);
case 144:
            var18['label'] = var16;
            var21 = _closure1_slot0;
            var22 = _closure1_slot3;
            var16 = 44;
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
                var3 = 31;
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
case 140:
            if(!var15) { _fun0001_ip = 145; continue _fun0001 }
case 146:
            var16 = var9.push;
            var19 = _closure1_slot14;
            var20 = _closure1_slot0;
            var21 = _closure1_slot3;
            var15 = 21;
            var15 = var21[var15];
            var15 = var20.bind(var6)(var15);
            var18 = var15.UserProfileFormRow;
            var17 = {};
            var15 = 22;
            var22 = var21[var15];
            var22 = var20.bind(var6)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var15 = var21[var15];
            var15 = var20.bind(var6)(var15);
            var15 = var15.t;
            var15 = var15.3glT6e;
            var15 = var22.bind(var23)(var15);
            var17['label'] = var15;
            var15 = 45;
            var15 = var21[var15];
            var15 = var20.bind(var6)(var15);
            var15 = var15.UserMinusIcon;
            var17['icon'] = var15;
            var15 = true;
            var17['isDestructive'] = var15;
            var15 = function onPress() {
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
                var2 = 46;
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
            var17['onPress'] = var15;
            var15 = 'kick';
            var15 = var19.bind(var6)(var18, var17, var15);
            var15 = var16.bind(var9)(var15);
case 145:
            if(!var14) { _fun0001_ip = 147; continue _fun0001 }
case 148:
            var15 = var9.push;
            var18 = _closure1_slot14;
            var19 = _closure1_slot0;
            var20 = _closure1_slot3;
            var14 = 21;
            var14 = var20[var14];
            var14 = var19.bind(var6)(var14);
            var17 = var14.UserProfileFormRow;
            var16 = {};
            var14 = 22;
            var21 = var20[var14];
            var21 = var19.bind(var6)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var14 = var20[var14];
            var14 = var19.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.5MBJ5O;
            var14 = var21.bind(var22)(var14);
            var16['label'] = var14;
            var14 = 47;
            var14 = var20[var14];
            var14 = var19.bind(var6)(var14);
            var14 = var14.HammerIcon;
            var16['icon'] = var14;
            var14 = true;
            var16['isDestructive'] = var14;
            var14 = function onPress() {
                var3 = _closure2_slot4;
                var2 = {};
                var1 = 'PRESS_BAN_USER';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 48;
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
            var14 = 'ban';
            var14 = var18.bind(var6)(var17, var16, var14);
            var14 = var15.bind(var9)(var14);
case 147:
            if(var12) { _fun0001_ip = 149; continue _fun0001 }
case 150:
            if(!var10) { _fun0001_ip = 151; continue _fun0001 }
case 149:
            if(!var7) { _fun0001_ip = 151; continue _fun0001 }
case 152:
            if(var5) { _fun0001_ip = 151; continue _fun0001 }
case 153:
            if(!(var1 != var3)) { _fun0001_ip = 151; continue _fun0001 }
case 154:
            var12 = _closure1_slot0;
            var14 = _closure1_slot3;
            var3 = 22;
            var5 = var14[var3];
            var5 = var12.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var3 = var14[var3];
            var3 = var12.bind(var6)(var3);
            var3 = var3.t;
            if(var10) { _fun0001_ip = 155; continue _fun0001 }
case 156:
            var10 = var3.at1yY2;
            var12 = var5.bind(var7)(var10);
            _fun0001_ip = 157; continue _fun0001;
case 155:
            var3 = var3.6+b8aW;
            var12 = var5.bind(var7)(var3);
case 157:
            var3 = var9.push;
            var10 = _closure1_slot14;
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var5 = 21;
            var5 = var15[var5];
            var5 = var14.bind(var6)(var5);
            var7 = var5.UserProfileFormRow;
            var5 = {};
            var16 = true;
            var5['isDestructive'] = var16;
            var5['label'] = var12;
            var12 = 49;
            var12 = var15[var12];
            var12 = var14.bind(var6)(var12);
            var12 = var12.ThreadMinusIcon;
            var5['icon'] = var12;
            var2 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 50;
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
                    var3 = 51;
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
            var5['onPress'] = var2;
            var2 = 'remove-from-thread';
            var2 = var10.bind(var6)(var7, var5, var2);
            var2 = var3.bind(var9)(var2);
case 151:
            var3 = var9.length;
            var2 = null;
            if(!(var4 !== var3)) { _fun0001_ip = 158; continue _fun0001 }
case 159:
            var5 = _closure1_slot14;
            var4 = _closure1_slot1;
            var10 = _closure1_slot3;
            var7 = 21;
            var3 = var10[var7];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var8 = _closure1_slot0;
            var12 = 22;
            var14 = var10[var12];
            var14 = var8.bind(var6)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var12 = var10[var12];
            var12 = var8.bind(var6)(var12);
            var12 = var12.t;
            var12 = var12.EApw/f;
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
case 158:
            return var2;
case 44:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();