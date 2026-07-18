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
    var1 = function ModeratorActionRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.label;
            var9 = var2.sublabel;
            var14 = var2.icon;
            var11 = var2.hint;
            var7 = var2.disabled;
            var1 = var2.isDestructive;
            var5 = var2.onPress;
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 12;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = 'UserProfileModeratorActions';
            var2 = var3.bind(var4)(var2);
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot15;
            var3 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 14;
            var2 = var8[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.UserProfileFormRow;
            var2 = {};
            var2['label'] = var10;
            var8 = null;
            var12 = var8 != var9;
            var8 = undefined;
            if(!var12) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = _closure1_slot15;
            var15 = _closure1_slot0;
            var17 = _closure1_slot3;
            var12 = 15;
            var12 = var17[var12];
            var12 = var15.bind(var4)(var12);
            var15 = var12.Text;
            var12 = {'variant': 'text-xs/normal', 'color': 'text-subtle'};
            var12['children'] = var9;
            var8 = var16.bind(var4)(var15, var12);
case 4:
            var2['sublabel'] = var8;
            var2['icon'] = var14;
            var2['hint'] = var11;
            var2['disabled'] = var7;
            var2['isDestructive'] = var1;
            var2['onPress'] = var5;
            var2 = var6.bind(var4)(var3, var2);
            return var2;
case 2:
            var8 = 'default';
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = 'danger';
case 6:
            var3 = _closure1_slot15;
            var12 = _closure1_slot0;
            var15 = _closure1_slot3;
            var6 = 13;
            var1 = var15[var6];
            var1 = var12.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['label'] = var10;
            var1['subLabel'] = var9;
            var13 = _closure1_slot15;
            var6 = var15[var6];
            var6 = var12.bind(var4)(var6);
            var6 = var6.TableRow;
            var12 = var6.Icon;
            var6 = {};
            var6['IconComponent'] = var14;
            var6['variant'] = var8;
            var6 = var13.bind(var4)(var12, var6);
            var1['icon'] = var6;
            var6 = null;
            var11 = var6 != var11;
            var1['arrow'] = var11;
            var1['variant'] = var8;
            var1['disabled'] = var7;
            var1['onPress'] = var5;
            var5 = var10;
            if(!(var6 != var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = global;
            var6 = var6.HermesInternal;
            var8 = var6.concat;
            var7 = '';
            var6 = ', ';
            var5 = var8.bind(var7)(var10, var6, var9);
case 8:
            var1['accessibilityLabel'] = var5;
            var5 = 'button';
            var1['accessibilityRole'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = 58;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileModeratorActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileModeratorActions(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var22 = var1.user;
            var _closure2_slot0 = var22;
            var17 = var1.currentUser;
            var26 = var1.guildId;
            var _closure2_slot1 = var26;
            var3 = var1.channelId;
            var _closure2_slot2 = var3;
            var4 = var1.showUserProfile;
            var _closure2_slot3 = var4;
            var13 = var1.style;
            var6 = undefined;
            var _closure2_slot13 = var6;
            var _closure2_slot14 = var6;
            var1 = _closure1_slot16;
            var10 = var1.bind(var6)();
            var24 = _closure1_slot1;
            var28 = _closure1_slot3;
            var1 = 12;
            var1 = var28[var1];
            var4 = var24.bind(var6)(var1);
            var1 = 'UserProfileModeratorActions';
            var8 = var4.bind(var6)(var1);
            var14 = _closure1_slot0;
            var1 = 16;
            var1 = var28[var1];
            var4 = var14.bind(var6)(var1);
            var1 = var4.useUserProfileAnalyticsContext;
            var1 = var1.bind(var4)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot4 = var1;
            var1 = 17;
            var1 = var28[var1];
            var1 = var24.bind(var6)(var1);
            var1 = var1.hideActionSheet;
            var _closure2_slot5 = var1;
            var1 = 18;
            var1 = var28[var1];
            var4 = var24.bind(var6)(var1);
            var1 = {};
            var5 = var22.id;
            var1['userId'] = var5;
            var1['guildId'] = var26;
            var1 = var4.bind(var6)(var1);
            var20 = var1.voiceState;
            var _closure2_slot6 = var20;
            var11 = var1.voiceChannel;
            var _closure2_slot7 = var11;
            var37 = 19;
            var1 = var28[var37];
            var7 = var14.bind(var6)(var1);
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
            var27 = var5.bind(var7)(var4, var1);
            var _closure2_slot8 = var27;
            var1 = var28[var37];
            var7 = var14.bind(var6)(var1);
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
            var15 = var5.bind(var7)(var4, var1);
            var _closure2_slot9 = var15;
            var4 = var22.id;
            var1 = var17.id;
            var4 = var4 === var1;
            var _closure2_slot10 = var4;
            var1 = var28[var37];
            var16 = var14.bind(var6)(var1);
            var12 = var16.useStateFromStores;
            var1 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var1;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot2;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var3 = var4.isThread;
                    var2 = var3.bind(var4)();
case 10:
                    var1 = var1 != var2;
                    if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var1 = var2;
case 12:
                    return var1;
                }
            };
            var12 = var12.bind(var16)(var7, var5);
            var5 = var28[var37];
            var16 = var14.bind(var6)(var5);
            var7 = var16.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot2;
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var3 = var4.isForumPost;
                    var2 = var3.bind(var4)();
case 10:
                    var1 = var1 != var2;
                    if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var1 = var2;
case 12:
                    return var1;
                }
            };
            var7 = var7.bind(var16)(var5, var1);
            var _closure2_slot11 = var7;
            var1 = 20;
            var1 = var28[var1];
            var5 = var14.bind(var6)(var1);
            var1 = var5.useCanRemoveThreadMember;
            var5 = var1.bind(var5)(var3);
            var1 = var28[var37];
            var18 = var14.bind(var6)(var1);
            var16 = var18.useStateFromStoresObject;
            var1 = _closure1_slot10;
            var14 = new Array(1);
            var14[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var5 = 21;
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
                    if(!var3) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var11 = _closure1_slot10;
                    var10 = var11.canManageUser;
                    var6 = _closure1_slot13;
                    var9 = var6.MANAGE_NICKNAMES;
                    var8 = _closure2_slot0;
                    var6 = _closure2_slot8;
                    var3 = var10.bind(var11)(var9, var8, var6);
case 14:
                    var1['canChangeNick'] = var3;
                    var3 = _closure2_slot8;
                    var3 = var5 != var3;
                    if(!var3) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var11 = _closure1_slot10;
                    var10 = var11.canManageUser;
                    var6 = _closure1_slot13;
                    var9 = var6.MANAGE_ROLES;
                    var8 = _closure2_slot0;
                    var6 = _closure2_slot8;
                    var3 = var10.bind(var11)(var9, var8, var6);
case 16:
                    var1['canManageUserRoles'] = var3;
                    var3 = _closure2_slot8;
                    var3 = var5 != var3;
                    if(!var3) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var10 = _closure1_slot10;
                    var9 = var10.can;
                    var6 = _closure1_slot13;
                    var8 = var6.MANAGE_ROLES;
                    var6 = _closure2_slot8;
                    var3 = var9.bind(var10)(var8, var6);
case 18:
                    var1['canManageGuildRoles'] = var3;
                    var3 = _closure2_slot8;
                    var3 = var5 != var3;
                    if(!var3) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var11 = _closure1_slot10;
                    var10 = var11.canManageUser;
                    var6 = _closure1_slot13;
                    var9 = var6.MANAGE_GUILD;
                    var8 = _closure2_slot0;
                    var6 = _closure2_slot8;
                    var3 = var10.bind(var11)(var9, var8, var6);
case 20:
                    var1['canManageGuild'] = var3;
                    var3 = _closure2_slot8;
                    var3 = var5 != var3;
                    if(!var3) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var10 = _closure1_slot10;
                    var9 = var10.canManageUser;
                    var5 = _closure1_slot13;
                    var8 = var5.MODERATE_MEMBERS;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot8;
                    var3 = var9.bind(var10)(var8, var6, var5);
case 22:
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
                    var2 = 22;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                    var2 = var3.bind(var5)(var2, var4);
                    var1['canModerateStage'] = var2;
                    return var1;
                }
            };
            var21 = var16.bind(var18)(var14, var1);
            var16 = var21.canKickUser;
            var14 = var21.canBanUser;
            var31 = var21.canChangeNick;
            var1 = var21.canManageUserRoles;
            var29 = var21.canManageGuildRoles;
            var18 = var21.canManageGuild;
            var30 = var21.canModerateMembers;
            var19 = var21.canMoveMembers;
            var _closure2_slot12 = var19;
            var25 = var21.canMuteMembers;
            var23 = var21.canDeafenMembers;
            var32 = var21.canModerateStage;
            var21 = 23;
            var21 = var28[var21];
            var24 = var24.bind(var6)(var21);
            var21 = var22.id;
            var21 = var24.bind(var6)(var26, var21);
            if(!var30) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var30 = var16;
case 24:
            if(!var30) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var30 = var14;
case 26:
            if(var30) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var30 = var18;
case 28:
            if(var30) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var30 = var1;
case 30:
            var18 = _closure1_slot1;
            var1 = _closure1_slot3;
            var24 = 24;
            var24 = var1[var24];
            var24 = var18.bind(var6)(var24);
            var35 = var24.bind(var6)(var11);
            var33 = 25;
            var1 = var1[var33];
            var26 = var18.bind(var6)(var1);
            var24 = var22.id;
            var1 = null;
            var28 = var1 == var11;
            var18 = undefined;
            if(var28) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var18 = var11.id;
case 32:
            var28 = var26.bind(var6)(var24, var18);
            var18 = var1 != var11;
            if(!var18) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var26 = var1 == var20;
            var24 = undefined;
            if(var26) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var24 = var20.channelId;
case 36:
            var18 = var1 != var24;
case 34:
            var34 = var1 != var11;
            if(!var34) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var24 = var11.isGuildStageVoice;
            var34 = var24.bind(var11)();
case 38:
            var24 = var1 != var11;
            if(!var24) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var11 = !var34;
            if(var11) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var36 = _closure1_slot0;
            var26 = _closure1_slot3;
            var26 = var26[var33];
            var26 = var36.bind(var6)(var26);
            var26 = var26.RequestToSpeakStates;
            var26 = var26.ON_STAGE;
            var11 = var28 === var26;
case 42:
            var24 = var11;
case 40:
            var36 = _closure1_slot0;
            var11 = _closure1_slot3;
            var26 = var11[var37];
            var40 = var36.bind(var6)(var26);
            var39 = var40.useStateFromStores;
            var26 = _closure1_slot4;
            var38 = new Array(1);
            var38[0] = var26;
            var26 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot4;
                    var3 = var4.getPermissionsForUser;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var6 = _closure2_slot7;
                    var1 = null;
                    var6 = var1 == var6;
                    var1 = undefined;
                    if(var6) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var5 = _closure2_slot7;
                    var1 = var5.id;
case 44:
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = var1.speaker;
                    return var1;
                }
            };
            var26 = var39.bind(var40)(var38, var26);
            var11 = var11[var37];
            var38 = var36.bind(var6)(var11);
            var37 = var38.useStateFromStoresArray;
            var11 = _closure1_slot6;
            var36 = new Array(4);
            var36[0] = var11;
            var11 = _closure1_slot11;
            var36[1] = var11;
            var11 = _closure1_slot9;
            var36[2] = var11;
            var11 = _closure1_slot10;
            var36[3] = var11;
            var11 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot12;
                    if(!var1) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var3 = _closure2_slot7;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0007_ip = 48; continue _fun0007 }
case 46:
                    var1 = new Array(0);
                    _fun0007_ip = 49; continue _fun0007;
case 48:
                    var6 = _closure1_slot6;
                    var5 = var6.getChannels;
                    var4 = _closure2_slot1;
                    var4 = var5.bind(var6)(var4);
                    var3 = _closure1_slot7;
                    var5 = var4[var3];
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = arg1;
                            var8 = var1.channel;
                            var2 = var8.id;
                            var1 = _closure2_slot7;
                            var1 = var1.id;
                            var1 = var2 !== var1;
                            if(!var1) { _fun0008_ip = 23; continue _fun0008 }
case 11:
                            var2 = _closure2_slot10;
                            var6 = _closure1_slot10;
                            var5 = var6.can;
                            var3 = _closure1_slot13;
                            if(var2) { _fun0008_ip = 18; continue _fun0008 }
case 50:
                            var2 = var3.MOVE_MEMBERS;
                            var2 = var5.bind(var6)(var2, var8);
                            if(!var2) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                            var10 = _closure1_slot10;
                            var9 = var10.can;
                            var7 = _closure1_slot13;
                            var7 = var7.CONNECT;
                            var7 = var9.bind(var10)(var7, var8);
                            if(var7) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                            var11 = _closure1_slot2;
                            var10 = _closure1_slot3;
                            var9 = 27;
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
case 53:
                            var2 = var7;
case 51:
                            if(!var2) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var7 = 26;
                            var9 = var9[var7];
                            var7 = undefined;
                            var11 = var10.bind(var7)(var9);
                            var10 = var11.isChannelFull;
                            var9 = _closure1_slot11;
                            var7 = _closure1_slot9;
                            var7 = var10.bind(var11)(var8, var9, var7);
                            var2 = !var7;
case 55:
                            _fun0008_ip = 57; continue _fun0008;
case 18:
                            var3 = var3.CONNECT;
                            var3 = var5.bind(var6)(var3, var8);
                            if(!var3) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var5 = 26;
                            var6 = var6[var5];
                            var5 = undefined;
                            var7 = var7.bind(var5)(var6);
                            var6 = var7.isChannelFull;
                            var5 = _closure1_slot11;
                            var4 = _closure1_slot9;
                            var4 = var6.bind(var7)(var8, var5, var4);
                            var3 = !var4;
case 58:
                            var2 = var3;
case 57:
                            var1 = var2;
case 23:
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
case 49:
                    return var1;
                }
            };
            var11 = var37.bind(var38)(var36, var11);
            _closure2_slot13 = var11;
            if(!(var1 != var27)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var11 = new Array(0);
            var36 = var34;
            if(!var36) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var36 = var32;
case 62:
            if(!var36) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var36 = var26;
case 64:
            if(!var36) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var37 = var11.push;
            var40 = _closure1_slot15;
            var39 = _closure1_slot17;
            var38 = {};
            var41 = var22.id;
            var36 = var17.id;
            if(!(var41 !== var36)) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var43 = _closure1_slot0;
            var44 = _closure1_slot3;
            var36 = 28;
            var41 = var44[var36];
            var41 = var43.bind(var6)(var41);
            var42 = var41.intl;
            var41 = var42.string;
            var36 = var44[var36];
            var36 = var43.bind(var6)(var36);
            var36 = var36.t;
            var36 = var36.r23NoB;
            var36 = var41.bind(var42)(var36);
            _fun0002_ip = 70; continue _fun0002;
case 68:
            var44 = _closure1_slot0;
            var45 = _closure1_slot3;
            var41 = 28;
            var42 = var45[var41];
            var42 = var44.bind(var6)(var42);
            var43 = var42.intl;
            var42 = var43.string;
            var41 = var45[var41];
            var41 = var44.bind(var6)(var41);
            var41 = var41.t;
            var41 = var41["6C6PJx"];
            var36 = var42.bind(var43)(var41);
case 70:
            var38['label'] = var36;
            var41 = _closure1_slot0;
            var42 = _closure1_slot3;
            var36 = 29;
            var36 = var42[var36];
            var36 = var41.bind(var6)(var36);
            var36 = var36.GroupArrowDownIcon;
            var38['icon'] = var36;
            var36 = function onPress() {
                var4 = _closure2_slot4;
                var2 = {};
                var1 = 'PRESS_REMOVE_FROM_STAGE';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var6 = _closure1_slot0;
                var4 = _closure1_slot3;
                var5 = 30;
                var5 = var4[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.moveUserToAudience;
                var5 = _closure2_slot0;
                var3 = _closure2_slot7;
                var3 = var6.bind(var7)(var5, var3);
                var3 = _closure1_slot1;
                var2 = 17;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var38['onPress'] = var36;
            var36 = 'remove-from-stage';
            var36 = var40.bind(var6)(var39, var38, var36);
            var36 = var37.bind(var11)(var36);
case 66:
            if(!var34) { _fun0002_ip = 71; continue _fun0002 }
case 72:
            if(!var32) { _fun0002_ip = 71; continue _fun0002 }
case 73:
            if(var26) { _fun0002_ip = 71; continue _fun0002 }
case 74:
            var32 = _closure1_slot0;
            var26 = _closure1_slot3;
            var26 = var26[var33];
            var26 = var32.bind(var6)(var26);
            var26 = var26.RequestToSpeakStates;
            var26 = var26.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            var26 = var28 === var26;
            var34 = _closure1_slot0;
            var28 = _closure1_slot3;
            var41 = 28;
            var32 = var28[var41];
            var32 = var34.bind(var6)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var28 = var28[var41];
            var28 = var34.bind(var6)(var28);
            var28 = var28.t;
            if(var26) { _fun0002_ip = 75; continue _fun0002 }
case 76:
            var34 = var28.VUCWcO;
            var36 = var32.bind(var33)(var34);
            _fun0002_ip = 77; continue _fun0002;
case 75:
            var28 = var28.tHj7Tb;
            var36 = var32.bind(var33)(var28);
case 77:
            var28 = var11.push;
            var34 = _closure1_slot15;
            var33 = _closure1_slot17;
            var32 = {};
            var38 = _closure1_slot0;
            var39 = _closure1_slot3;
            var37 = 31;
            var37 = var39[var37];
            var37 = var38.bind(var6)(var37);
            var37 = var37.MicrophoneArrowRightIcon;
            var32['icon'] = var37;
            if(!var4) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var40 = _closure1_slot0;
            var37 = _closure1_slot3;
            var38 = var37[var41];
            var38 = var40.bind(var6)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var37 = var37[var41];
            var37 = var40.bind(var6)(var37);
            var37 = var37.t;
            var37 = var37["8Joh+p"];
            var36 = var38.bind(var39)(var37);
case 78:
            var32['label'] = var36;
            var32['disabled'] = var26;
            var26 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                    var5 = 30;
                    var5 = var7[var5];
                    var6 = var6.bind(var1)(var5);
                    if(var4) { _fun0009_ip = 80; continue _fun0009 }
case 81:
                    var7 = var6.inviteUserToStage;
                    var5 = _closure2_slot7;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var4 = var7.bind(var6)(var5, var4);
                    _fun0009_ip = 82; continue _fun0009;
case 80:
                    var5 = var6.audienceAckRequestToSpeak;
                    var4 = _closure2_slot7;
                    var3 = false;
                    var3 = var5.bind(var6)(var4, var3);
case 82:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 17;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var32['onPress'] = var26;
            var26 = 'invite-to-speak';
            var26 = var34.bind(var6)(var33, var32, var26);
            var26 = var28.bind(var11)(var26);
case 71:
            var26 = var18;
            if(!var18) { _fun0002_ip = 83; continue _fun0002 }
case 84:
            var26 = var19;
case 83:
            if(!var26) { _fun0002_ip = 85; continue _fun0002 }
case 86:
            var28 = var11.push;
            var34 = _closure1_slot15;
            var33 = _closure1_slot17;
            var32 = {};
            var36 = _closure1_slot0;
            var37 = _closure1_slot3;
            var26 = 28;
            var38 = var37[var26];
            var38 = var36.bind(var6)(var38);
            var39 = var38.intl;
            var38 = var39.string;
            var26 = var37[var26];
            var26 = var36.bind(var6)(var26);
            var26 = var26.t;
            var26 = var26.FAplms;
            var26 = var38.bind(var39)(var26);
            var32['label'] = var26;
            var26 = 32;
            var26 = var37[var26];
            var26 = var36.bind(var6)(var26);
            var26 = var26.FormArrow;
            var32['hint'] = var26;
            var36 = var1 != var35;
            var26 = undefined;
            if(!var36) { _fun0002_ip = 87; continue _fun0002 }
case 88:
            var26 = var35;
case 87:
            var32['sublabel'] = var26;
            var35 = _closure1_slot0;
            var36 = _closure1_slot3;
            var26 = 33;
            var26 = var36[var26];
            var26 = var35.bind(var6)(var26);
            var26 = var26.VoiceNormalIcon;
            var32['icon'] = var26;
            var26 = function onPress() {
                var4 = _closure2_slot4;
                var3 = {};
                var1 = 'PRESS_MOVE_TO_CHANNEL';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = _closure1_slot1;
                var12 = _closure1_slot3;
                var4 = 17;
                var4 = var12[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.openLazy;
                var11 = _closure1_slot0;
                var3 = 35;
                var3 = var12[var3];
                var5 = var11.bind(var1)(var3);
                var3 = 34;
                var4 = var12[var3];
                var3 = var12.paths;
                var5 = var5.bind(var1)(var4, var3);
                var4 = {};
                var3 = _closure2_slot8;
                var4['guild'] = var3;
                var3 = {};
                var8 = 28;
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
                    var1 = 36;
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
            var32['onPress'] = var26;
            var26 = 'move-to-channel';
            var26 = var34.bind(var6)(var33, var32, var26);
            var26 = var28.bind(var11)(var26);
case 85:
            var26 = var1 != var15;
            if(!var26) { _fun0002_ip = 89; continue _fun0002 }
case 90:
            var28 = var16;
            if(var16) { _fun0002_ip = 91; continue _fun0002 }
case 92:
            var28 = var14;
case 91:
            if(var28) { _fun0002_ip = 93; continue _fun0002 }
case 94:
            var28 = var31;
case 93:
            if(var28) { _fun0002_ip = 95; continue _fun0002 }
case 96:
            var28 = var29;
case 95:
            var26 = var28;
case 89:
            if(!var26) { _fun0002_ip = 97; continue _fun0002 }
case 98:
            var28 = var22.isNonUserBot;
            var28 = var28.bind(var22)();
            var26 = !var28;
case 97:
            if(!var26) { _fun0002_ip = 99; continue _fun0002 }
case 100:
            var28 = var11.push;
            var32 = _closure1_slot15;
            var31 = _closure1_slot17;
            var29 = {};
            var33 = _closure1_slot0;
            var34 = _closure1_slot3;
            var26 = 28;
            var35 = var34[var26];
            var35 = var33.bind(var6)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var26 = var34[var26];
            var26 = var33.bind(var6)(var26);
            var26 = var26.t;
            var26 = var26.HxrBOZ;
            var26 = var35.bind(var36)(var26);
            var29['label'] = var26;
            var26 = 37;
            var26 = var34[var26];
            var26 = var33.bind(var6)(var26);
            var26 = var26.SettingsIcon;
            var29['icon'] = var26;
            var26 = function onPress() {
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
                var4 = 38;
                var4 = var2[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.pushLazy;
                var8 = _closure1_slot0;
                var3 = 35;
                var3 = var2[var3];
                var8 = var8.bind(var1)(var3);
                var3 = 39;
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
                    var1 = 38;
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
                    var1 = 38;
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
            var29['onPress'] = var26;
            var26 = 'manage';
            var26 = var32.bind(var6)(var31, var29, var26);
            var26 = var28.bind(var11)(var26);
case 99:
            var31 = var27.features;
            var29 = var31.has;
            var26 = _closure1_slot12;
            var28 = var26.COMMUNITY;
            var29 = var29.bind(var31)(var28);
            var28 = var27.features;
            var27 = var28.has;
            var26 = var26.GUILD_ONBOARDING_EVER_ENABLED;
            var28 = var27.bind(var28)(var26);
            var27 = var1 != var15;
            if(!var27) { _fun0002_ip = 101; continue _fun0002 }
case 102:
            var31 = _closure1_slot0;
            var32 = _closure1_slot3;
            var26 = 40;
            var26 = var32[var26];
            var33 = var31.bind(var6)(var26);
            var32 = var33.hasFlag;
            var26 = var15.flags;
            var34 = var1 != var26;
            var31 = 0;
            if(!var34) { _fun0002_ip = 103; continue _fun0002 }
case 104:
            var31 = var26;
case 103:
            var26 = _closure1_slot14;
            var26 = var26.BYPASSES_VERIFICATION;
            var27 = var32.bind(var33)(var31, var26);
case 101:
            var26 = var1 != var15;
            if(!var26) { _fun0002_ip = 105; continue _fun0002 }
case 106:
            var26 = !var4;
case 105:
            if(!var26) { _fun0002_ip = 107; continue _fun0002 }
case 108:
            var26 = var30;
case 107:
            if(!var26) { _fun0002_ip = 109; continue _fun0002 }
case 110:
            var26 = var29;
case 109:
            if(!var26) { _fun0002_ip = 111; continue _fun0002 }
case 112:
            var26 = var28;
case 111:
            if(!var26) { _fun0002_ip = 113; continue _fun0002 }
case 114:
            var26 = var27;
case 113:
            if(!var26) { _fun0002_ip = 115; continue _fun0002 }
case 116:
            var31 = var11.push;
            var34 = _closure1_slot15;
            var33 = _closure1_slot17;
            var32 = {};
            var35 = _closure1_slot0;
            var36 = _closure1_slot3;
            var26 = 28;
            var37 = var36[var26];
            var37 = var35.bind(var6)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var26 = var36[var26];
            var26 = var35.bind(var6)(var26);
            var26 = var26.t;
            var26 = var26.NbhSI7;
            var26 = var37.bind(var38)(var26);
            var32['label'] = var26;
            var26 = 41;
            var26 = var36[var26];
            var26 = var35.bind(var6)(var26);
            var26 = var26.StampIcon;
            var32['icon'] = var26;
            var26 = function onPress() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = 'PRESS_UNVERIFY_USER';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var3 = 36;
                    var3 = var10[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.setMemberFlags;
                    var3 = _closure2_slot8;
                    var4 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var9 = _closure1_slot0;
                    var8 = 40;
                    var8 = var10[var8];
                    var10 = var9.bind(var1)(var8);
                    var9 = var10.setFlag;
                    var7 = _closure2_slot9;
                    var7 = var7.flags;
                    var8 = null;
                    var11 = var8 != var7;
                    var8 = 0;
                    if(!var11) { _fun0010_ip = 117; continue _fun0010 }
case 118:
                    var8 = var7;
case 117:
                    var2 = _closure1_slot14;
                    var7 = var2.BYPASSES_VERIFICATION;
                    var2 = false;
                    var2 = var9.bind(var10)(var8, var7, var2);
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var32['onPress'] = var26;
            var26 = 'unverify';
            var26 = var34.bind(var6)(var33, var32, var26);
            var26 = var31.bind(var11)(var26);
case 115:
            var26 = var1 != var15;
            if(!var26) { _fun0002_ip = 119; continue _fun0002 }
case 120:
            var26 = !var4;
case 119:
            if(!var26) { _fun0002_ip = 121; continue _fun0002 }
case 122:
            var26 = var30;
case 121:
            if(!var26) { _fun0002_ip = 123; continue _fun0002 }
case 124:
            var26 = var29;
case 123:
            if(!var26) { _fun0002_ip = 125; continue _fun0002 }
case 126:
            var26 = var28;
case 125:
            if(!var26) { _fun0002_ip = 127; continue _fun0002 }
case 128:
            var26 = !var27;
case 127:
            if(!var26) { _fun0002_ip = 129; continue _fun0002 }
case 130:
            var27 = var11.push;
            var30 = _closure1_slot15;
            var29 = _closure1_slot17;
            var28 = {};
            var31 = _closure1_slot0;
            var32 = _closure1_slot3;
            var26 = 28;
            var33 = var32[var26];
            var33 = var31.bind(var6)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var26 = var32[var26];
            var26 = var31.bind(var6)(var26);
            var26 = var26.t;
            var26 = var26["6QlTeK"];
            var26 = var33.bind(var34)(var26);
            var28['label'] = var26;
            var26 = 41;
            var26 = var32[var26];
            var26 = var31.bind(var6)(var26);
            var26 = var26.StampIcon;
            var28['icon'] = var26;
            var26 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = 'PRESS_VERIFY_USER';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var3 = 36;
                    var3 = var10[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.setMemberFlags;
                    var3 = _closure2_slot8;
                    var4 = var3.id;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var9 = _closure1_slot0;
                    var8 = 40;
                    var8 = var10[var8];
                    var10 = var9.bind(var1)(var8);
                    var9 = var10.setFlag;
                    var7 = _closure2_slot9;
                    var7 = var7.flags;
                    var8 = null;
                    var11 = var8 != var7;
                    var8 = 0;
                    if(!var11) { _fun0011_ip = 117; continue _fun0011 }
case 118:
                    var8 = var7;
case 117:
                    var2 = _closure1_slot14;
                    var7 = var2.BYPASSES_VERIFICATION;
                    var2 = true;
                    var2 = var9.bind(var10)(var8, var7, var2);
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var28['onPress'] = var26;
            var26 = 'verify';
            var26 = var30.bind(var6)(var29, var28, var26);
            var26 = var27.bind(var11)(var26);
case 129:
            if(!(var1 != var15)) { _fun0002_ip = 131; continue _fun0002 }
case 132:
            if(!var21) { _fun0002_ip = 131; continue _fun0002 }
case 133:
            var26 = _closure1_slot0;
            var27 = _closure1_slot3;
            var21 = 42;
            var21 = var27[var21];
            var26 = var26.bind(var6)(var21);
            var21 = var26.isMemberCommunicationDisabled;
            var21 = var21.bind(var26)(var15);
            _closure2_slot14 = var21;
            var26 = var11.push;
            var29 = _closure1_slot15;
            var28 = _closure1_slot17;
            var27 = {};
            var33 = _closure1_slot0;
            var34 = _closure1_slot3;
            var30 = 28;
            var31 = var34[var30];
            var31 = var33.bind(var6)(var31);
            var32 = var31.intl;
            var31 = var32.string;
            var30 = var34[var30];
            var30 = var33.bind(var6)(var30);
            var30 = var30.t;
            if(var21) { _fun0002_ip = 134; continue _fun0002 }
case 135:
            var21 = var30.xpsADY;
            var21 = var31.bind(var32)(var21);
            _fun0002_ip = 136; continue _fun0002;
case 134:
            var30 = var30.qXtNtS;
            var21 = var31.bind(var32)(var30);
case 136:
            var27['label'] = var21;
            var30 = _closure1_slot0;
            var31 = _closure1_slot3;
            var21 = 43;
            var21 = var31[var21];
            var21 = var30.bind(var6)(var21);
            var21 = var21.ClockWarningIcon;
            var27['icon'] = var21;
            var21 = function onPress() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = {};
                    var4 = _closure2_slot14;
                    var1 = 'PRESS_TIME_OUT_USER';
                    if(!var4) { _fun0012_ip = 48; continue _fun0012 }
case 46:
                    var1 = 'PRESS_REMOVE_TIME_OUT';
case 48:
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var2 = _closure2_slot5;
                    var2 = var2.bind(var1)();
                    var2 = _closure2_slot14;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 44;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    if(var2) { _fun0012_ip = 137; continue _fun0012 }
case 138:
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
                    _fun0012_ip = 53; continue _fun0012;
case 137:
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
case 53:
                    return var1;
                }
            };
            var27['onPress'] = var21;
            var21 = 'time-out';
            var21 = var29.bind(var6)(var28, var27, var21);
            var21 = var26.bind(var11)(var21);
case 131:
            var21 = var18;
            if(!var18) { _fun0002_ip = 139; continue _fun0002 }
case 140:
            var21 = var24;
case 139:
            if(!var21) { _fun0002_ip = 141; continue _fun0002 }
case 142:
            var21 = var25;
case 141:
            if(!var21) { _fun0002_ip = 143; continue _fun0002 }
case 144:
            var25 = var11.push;
            var28 = _closure1_slot15;
            var27 = _closure1_slot17;
            var26 = {};
            var21 = var20.mute;
            var32 = _closure1_slot0;
            var33 = _closure1_slot3;
            var29 = 28;
            var30 = var33[var29];
            var30 = var32.bind(var6)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var33[var29];
            var29 = var32.bind(var6)(var29);
            var29 = var29.t;
            if(var21) { _fun0002_ip = 145; continue _fun0002 }
case 146:
            var21 = var29.e9e9Ua;
            var21 = var30.bind(var31)(var21);
            _fun0002_ip = 147; continue _fun0002;
case 145:
            var29 = var29.wG9K2n;
            var21 = var30.bind(var31)(var29);
case 147:
            var26['label'] = var21;
            var21 = var20.mute;
            var30 = _closure1_slot0;
            var31 = _closure1_slot3;
            if(var21) { _fun0002_ip = 148; continue _fun0002 }
case 149:
            var21 = 46;
            var21 = var31[var21];
            var21 = var30.bind(var6)(var21);
            var21 = var21.MicrophoneIcon;
            _fun0002_ip = 150; continue _fun0002;
case 148:
            var29 = 45;
            var29 = var31[var29];
            var29 = var30.bind(var6)(var29);
            var21 = var29.MicrophoneSlashIcon;
case 150:
            var26['icon'] = var21;
            var21 = function onPress() {
                var4 = _closure2_slot4;
                var3 = {};
                var1 = 'SERVER_MUTE';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var3 = 36;
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
            var26['onPress'] = var21;
            var21 = 'server-mute';
            var21 = var28.bind(var6)(var27, var26, var21);
            var21 = var25.bind(var11)(var21);
case 143:
            var21 = var18;
            if(!var18) { _fun0002_ip = 151; continue _fun0002 }
case 152:
            var21 = var24;
case 151:
            if(!var21) { _fun0002_ip = 153; continue _fun0002 }
case 154:
            var21 = var23;
case 153:
            if(!var21) { _fun0002_ip = 155; continue _fun0002 }
case 156:
            var21 = var11.push;
            var25 = _closure1_slot15;
            var24 = _closure1_slot17;
            var23 = {};
            var26 = var20.deaf;
            var30 = _closure1_slot0;
            var31 = _closure1_slot3;
            var27 = 28;
            var28 = var31[var27];
            var28 = var30.bind(var6)(var28);
            var29 = var28.intl;
            var28 = var29.string;
            var27 = var31[var27];
            var27 = var30.bind(var6)(var27);
            var27 = var27.t;
            if(var26) { _fun0002_ip = 157; continue _fun0002 }
case 158:
            var26 = var27.hMA2GE;
            var26 = var28.bind(var29)(var26);
            _fun0002_ip = 159; continue _fun0002;
case 157:
            var27 = var27.Gbw4Z9;
            var26 = var28.bind(var29)(var27);
case 159:
            var23['label'] = var26;
            var20 = var20.deaf;
            var27 = _closure1_slot0;
            var28 = _closure1_slot3;
            if(var20) { _fun0002_ip = 160; continue _fun0002 }
case 161:
            var20 = 48;
            var20 = var28[var20];
            var20 = var27.bind(var6)(var20);
            var20 = var20.HeadphonesIcon;
            _fun0002_ip = 162; continue _fun0002;
case 160:
            var26 = 47;
            var26 = var28[var26];
            var26 = var27.bind(var6)(var26);
            var20 = var26.HeadphonesSlashIcon;
case 162:
            var23['icon'] = var20;
            var20 = function onPress() {
                var4 = _closure2_slot4;
                var3 = {};
                var1 = 'DEAFEN';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var3 = 36;
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
            var23['onPress'] = var20;
            var20 = 'deafen';
            var20 = var25.bind(var6)(var24, var23, var20);
            var20 = var21.bind(var11)(var20);
case 155:
            if(!var18) { _fun0002_ip = 163; continue _fun0002 }
case 164:
            var18 = var19;
case 163:
            if(!var18) { _fun0002_ip = 165; continue _fun0002 }
case 166:
            var18 = var11.push;
            var21 = _closure1_slot15;
            var20 = _closure1_slot17;
            var19 = {};
            var22 = var22.id;
            var17 = var17.id;
            if(!(var22 !== var17)) { _fun0002_ip = 167; continue _fun0002 }
case 168:
            var24 = _closure1_slot0;
            var25 = _closure1_slot3;
            var17 = 28;
            var22 = var25[var17];
            var22 = var24.bind(var6)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var17 = var25[var17];
            var17 = var24.bind(var6)(var17);
            var17 = var17.t;
            var17 = var17["/jERiG"];
            var17 = var22.bind(var23)(var17);
            _fun0002_ip = 169; continue _fun0002;
case 167:
            var25 = _closure1_slot0;
            var26 = _closure1_slot3;
            var22 = 28;
            var23 = var26[var22];
            var23 = var25.bind(var6)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var26[var22];
            var22 = var25.bind(var6)(var22);
            var22 = var22.t;
            var22 = var22["6vrfgt"];
            var17 = var23.bind(var24)(var22);
case 169:
            var19['label'] = var17;
            var22 = _closure1_slot0;
            var23 = _closure1_slot3;
            var17 = 49;
            var17 = var23[var17];
            var17 = var22.bind(var6)(var17);
            var17 = var17.PhoneHangUpIcon;
            var19['icon'] = var17;
            var17 = true;
            var19['isDestructive'] = var17;
            var17 = function onPress() {
                var4 = _closure2_slot4;
                var3 = {};
                var1 = 'DISCONNECT';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var3 = 36;
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
            var19['onPress'] = var17;
            var17 = 'disconnect';
            var17 = var21.bind(var6)(var20, var19, var17);
            var17 = var18.bind(var11)(var17);
case 165:
            var15 = var1 != var15;
            if(!var15) { _fun0002_ip = 170; continue _fun0002 }
case 171:
            var15 = var16;
case 170:
            if(!var15) { _fun0002_ip = 172; continue _fun0002 }
case 173:
            var16 = var11.push;
            var19 = _closure1_slot15;
            var18 = _closure1_slot17;
            var17 = {};
            var20 = _closure1_slot0;
            var21 = _closure1_slot3;
            var15 = 28;
            var22 = var21[var15];
            var22 = var20.bind(var6)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var15 = var21[var15];
            var15 = var20.bind(var6)(var15);
            var15 = var15.t;
            var15 = var15["3glT6Z"];
            var15 = var22.bind(var23)(var15);
            var17['label'] = var15;
            var15 = 50;
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
            var17['onPress'] = var15;
            var15 = 'kick';
            var15 = var19.bind(var6)(var18, var17, var15);
            var15 = var16.bind(var11)(var15);
case 172:
            if(!var14) { _fun0002_ip = 174; continue _fun0002 }
case 175:
            var15 = var11.push;
            var18 = _closure1_slot15;
            var17 = _closure1_slot17;
            var16 = {};
            var19 = _closure1_slot0;
            var20 = _closure1_slot3;
            var14 = 28;
            var21 = var20[var14];
            var21 = var19.bind(var6)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var14 = var20[var14];
            var14 = var19.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14["5MBJ5M"];
            var14 = var21.bind(var22)(var14);
            var16['label'] = var14;
            var14 = 52;
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
                var2 = 53;
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
            var14 = var15.bind(var11)(var14);
case 174:
            if(var12) { _fun0002_ip = 176; continue _fun0002 }
case 177:
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
case 176:
            if(!var5) { _fun0002_ip = 178; continue _fun0002 }
case 179:
            if(var4) { _fun0002_ip = 178; continue _fun0002 }
case 180:
            if(!(var1 != var3)) { _fun0002_ip = 178; continue _fun0002 }
case 181:
            var12 = _closure1_slot0;
            var14 = _closure1_slot3;
            var3 = 28;
            var4 = var14[var3];
            var4 = var12.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var14[var3];
            var3 = var12.bind(var6)(var3);
            var3 = var3.t;
            if(var7) { _fun0002_ip = 182; continue _fun0002 }
case 183:
            var7 = var3.at1yY3;
            var12 = var4.bind(var5)(var7);
            _fun0002_ip = 184; continue _fun0002;
case 182:
            var3 = var3["6+b8ae"];
            var12 = var4.bind(var5)(var3);
case 184:
            var3 = var11.push;
            var7 = _closure1_slot15;
            var5 = _closure1_slot17;
            var4 = {};
            var14 = true;
            var4['isDestructive'] = var14;
            var4['label'] = var12;
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var12 = 54;
            var12 = var15[var12];
            var12 = var14.bind(var6)(var12);
            var12 = var12.ThreadMinusIcon;
            var4['icon'] = var12;
            var2 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 55;
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
                    var3 = 56;
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
            var2 = var3.bind(var11)(var2);
case 178:
            var4 = var11.length;
            var3 = 0;
            var2 = null;
            if(!(var3 !== var4)) { _fun0002_ip = 185; continue _fun0002 }
case 186:
            var5 = _closure1_slot15;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var7 = 14;
            var3 = var3[var7];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var12 = undefined;
            if(var8) { _fun0002_ip = 187; continue _fun0002 }
case 188:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var14 = 28;
            var15 = var18[var14];
            var15 = var17.bind(var6)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.EApw/R;
            var12 = var15.bind(var16)(var14);
case 187:
            var3['title'] = var12;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var10.cardContainer;
            var12[1] = var13;
            var3['style'] = var12;
            var10 = var10.cardTitle;
            var3['titleStyle'] = var10;
            var10 = _closure1_slot15;
            var15 = _closure1_slot0;
            var16 = _closure1_slot3;
            if(var8) { _fun0002_ip = 189; continue _fun0002 }
case 190:
            var7 = var16[var7];
            var7 = var15.bind(var6)(var7);
            var8 = var7.UserProfileCardRows;
            var7 = {};
            var7['children'] = var11;
            var7 = var10.bind(var6)(var8, var7);
            _fun0002_ip = 191; continue _fun0002;
case 189:
            var8 = 57;
            var8 = var16[var8];
            var8 = var15.bind(var6)(var8);
            var9 = var8.TableRowGroup;
            var8 = {};
            var12 = true;
            var8['hasIcons'] = var12;
            var12 = 28;
            var13 = var16[var12];
            var13 = var15.bind(var6)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var6)(var12);
            var12 = var12.t;
            var12 = var12.EApw/R;
            var12 = var13.bind(var14)(var12);
            var8['title'] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var6)(var9, var8);
case 191:
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 185:
            return var2;
case 60:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();